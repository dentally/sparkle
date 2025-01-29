import { action } from '@ember/object';
import Component from '@glimmer/component';

type Option = string | Record<string, unknown>;

interface FormSelectArgs {
  options: Option[];
  selected: unknown;
  valuePath?: string;
  labelPath?: string;
  onChange: (value: unknown) => void;
}

export default class FormSelect extends Component<FormSelectArgs> {
  @action
  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    let value: unknown = target.value;
    if (this.args.valuePath) {
      const foundValue = this.args.options.find((option) => {
        if (typeof option === 'object' && option !== null) {
          return option[this.args.valuePath!] === value;
        }
        return false;
      });
      if (foundValue) {
        value = foundValue;
      }
    }
    this.args.onChange(value);
  }
}
