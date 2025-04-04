import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  options: null,
  selectedValue: null,
  
  init() {
    this._super(...arguments);
    if (!this.options) {
      this.set('options', []);
    }
  },
  
  actions: {
    onChange(event) {
      const selectedValue = event.target.value;
      this.set('selectedValue', selectedValue);
      
      if (this.onChange) {
        this.onChange(selectedValue);
      }
    }
  }
});
