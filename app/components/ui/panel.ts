import Component from '@glimmer/component';

interface UiPanelArgs {
  title: string;
  onCancel: () => void;
  onSave: () => void;
}

export default class UiPanel extends Component<UiPanelArgs> {}
