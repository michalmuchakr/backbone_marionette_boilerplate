import Marionette from 'backbone.marionette';
import template from '../templates/item.hbs';
import Component1 from './Component1';
import Component2 from './Component2';

export default Marionette.View.extend({
    template: template,

    regions: {
        region1: '#app_v1',
        region2: '#app_v2'
    },

    onRender() {
        this.showChildView('region1', new Component1());
        this.showChildView('region2', new Component2());
    },


    // templateHelpers: {
    //     items: this.collection
    // }
});
