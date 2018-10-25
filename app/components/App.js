import Marionette from 'backbone.marionette';
import ItemView from './ItemView';
import model from '../models/model_v1';


export default Marionette.Application.extend({
    region: '#app',

    onStart() {
        this.showView(new ItemView({
            model
        }));
    }
});
