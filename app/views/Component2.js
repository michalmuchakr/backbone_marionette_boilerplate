import template from '../templates/component2.hbs';
import Marionette from 'backbone.marionette';

export default Marionette.View.extend({
    template: template,

    onRender(){
        console.log('component rendered');
    }
})
