import template from '../templates/component1.hbs';
import Marionette from 'backbone.marionette';
import component3 from './Component3';

export default Marionette.View.extend({
  template: template,

  regions: {
    someRegion: '.nested'
  },

  onRender(){
    this.showChildView('someRegion', new component3());
  }
})
