import Component from '@glimmer/component';

interface UiButtonArgs {
  label: string;
  appearance?: 'default' | 'strong';
  onClick: (event: MouseEvent) => void;
}

export default class UiButton extends Component<UiButtonArgs> {
  get appearance() {
    return this.args.appearance ?? 'default';
  }

  get isDefault() {
    return this.appearance === 'default';
  }
  get isStrong() {
    return this.appearance === 'strong';
  }
}
