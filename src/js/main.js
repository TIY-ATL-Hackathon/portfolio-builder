import angular from 'angular';
import 'angular-ui-router';
import {HomeController} from './controllers/home.controller.js'
import {config} from './utilities/config.js';
import {server} from './utilities/github.server.js';
import {registerUser} from './controllers/register_user.controller.js';
import {requests} from './services/requests.service.js'
import "./utilities/nav.js";

angular 
    .module('app',['ui.router'])
    .config(config)
    .constant('GITSERVER', server)
    .controller('HomeController', HomeController)
    .controller('RegisterController',registerUser)    
    .service('requests', requests)
    

;




