import Component from '@glimmer/component';

interface FormFieldArgs {
  label: string;
  labelFor: string;
  isFullWidth: boolean;
}

export default class FormField extends Component<FormFieldArgs> {
  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }
}
