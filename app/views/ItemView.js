import Marionette from 'backbone.marionette';
import template from '../templates/item_view.hbs';
import MainNavView from './shared/nav';
import Component1View from './Component1';
import Component2View from './Component2';

export default Marionette.View.extend({
  template: template,
  
  regions: {
    mainNavigation: '#mainNav',
    region1: '#app_v1',
    region2: '#app_v2'
  },

  onRender() {
    this.showChildView('mainNavigation', new MainNavView());
    this.showChildView('region1', new Component1View());
    this.showChildView('region2', new Component2View());
  }
});
