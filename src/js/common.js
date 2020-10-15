// JS
import '../modules/test-module/test-module';
import {ExampleFunctionTwo} from "../modules/test-module/test-module";

// import Vue directives

// Vue.js
import Vue from 'vue';
//import store from './vue/vue-store';
//import router from './vue/vue-router';

//import Vue plugins

// styles
import '../styles/main.scss';


// Vue components (for use in html)


// Vue directives


//Plugins init

// Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

// Vue init
const app = new Vue({
    //store: store,
    //router: router,
    el: '#app',
    created() {
        ExampleFunctionTwo('two');
    }
});

window.app = app;
