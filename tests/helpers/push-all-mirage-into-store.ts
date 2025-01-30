import { getContext } from '@ember/test-helpers';
import { type TestContext } from '@ember/test-helpers';
import Store from '@ember-data/store';

type Context = TestContext & {
  server: any;
};

export default function (requestedRecords = {}) {
  const context = getContext() as Context;
  const store = context.owner.lookup('service:store') as Store;
  const returnedRecords = {};

  Object.keys(context.server.schema)
    .filter((key) => context.server.schema[key].all !== undefined) // Get the resources
    .forEach((resource) => {
      const models = context.server.schema[resource].all();
      const modelName = models.modelName;
      const serializer =
        context.server.serializerOrRegistry.serializerFor(modelName);

      const originalAlwaysIncludeLinkageData =
        serializer.alwaysIncludeLinkageData;
      serializer.alwaysIncludeLinkageData = true;

      const json = serializer.serialize(models);

      serializer.alwaysIncludeLinkageData = originalAlwaysIncludeLinkageData;

      store.pushPayload(json);
    });

  Object.keys(requestedRecords).forEach((key) => {
    let recordOrRecords = requestedRecords[key];
    if (Array.isArray(recordOrRecords)) {
      returnedRecords[key] = recordOrRecords.map((record) =>
        store.peekRecord(record.modelName, record.id),
      );
    } else {
      returnedRecords[key] = store.peekRecord(
        recordOrRecords.modelName,
        recordOrRecords.id,
      );
    }
  });

  return returnedRecords;
}
