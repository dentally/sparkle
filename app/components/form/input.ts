import { action } from '@ember/object';
import Component from '@glimmer/component';

interface FormInputArgs {
  value: string;
  onUpdate: (value: string) => void;
}

export default class FormInput extends Component<FormInputArgs> {
  @action
  onUpdate(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (this.args.onUpdate) {
      this.args.onUpdate(target.value);
    }
  }
}
