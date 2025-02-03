import templateOnly from '@ember/component/template-only';

interface UiPanelArgs {
  title: string;
  onCancel: () => void;
  onSave: () => void;
}

export default templateOnly<UiPanelArgs>();
