import angular from 'angular';
import 'angular-cookies';
import 'angular-ui-router';
import {HomeController} from './controllers/home.controller.js'
import {config} from './utilities/config.js';
import {server} from './utilities/tim.server.js';
import {registerUser} from './controllers/register_user.controller.js';
import {requests} from './services/requests.service.js'

import {Login} from './controllers/login.controller.js';

import "./utilities/nav.js";


angular 
    .module('app',['ui.router','ngCookies'])
    .config(config)
    .constant('SERVER', server)
    .controller('HomeController', HomeController)
    .controller('RegisterController',registerUser)    
    .controller('LoginController', Login)  
    .service('requests', requests)
    

;




