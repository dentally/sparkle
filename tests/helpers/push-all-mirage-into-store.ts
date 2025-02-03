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

      (store as any).pushPayload(json);
    });

  Object.keys(requestedRecords).forEach((key) => {
    const recordOrRecords =
      requestedRecords[key as keyof typeof requestedRecords];
    if (Array.isArray(recordOrRecords)) {
      (returnedRecords as Record<string, unknown>)[key] = (
        recordOrRecords as Array<{ modelName: string; id: string }>
      ).map((record) => store.peekRecord(record.modelName, record.id));
    } else {
      (returnedRecords as Record<string, unknown>)[key] = store.peekRecord(
        (recordOrRecords as { modelName: string; id: string }).modelName,
        (recordOrRecords as { modelName: string; id: string }).id,
      );
    }
  });

  return returnedRecords;
}
