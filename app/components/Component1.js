import Marionette from 'backbone.marionette';
import Component3 from './Component3';
import template from '../templates/component1.hbs';


export default Marionette.View.extend({
    template: template,

    regions: {
        someRegion: '.nested'
    },

    onRender(){
        this.showChildView('someRegion', new Component3());
    }
})
