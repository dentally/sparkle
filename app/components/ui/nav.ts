import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface UiNavArgs {}

export default class UiNav extends Component<UiNavArgs> {
  @tracked isOpen: boolean = false;

  @action
  onToggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
