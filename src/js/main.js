import angular from 'angular';
import 'angular-cookies';
import 'angular-ui-router';

import {config} from './utilities/config.js';
import {server} from './utilities/tim.server.js';


import {HomeController} from './controllers/home.controller.js';
import {Login} from './controllers/login.controller.js';
import {profileInfo} from './controllers/profile.info.controller.js';
import {registerUser} from './controllers/register_user.controller.js';
import {requests} from './services/requests.service.js'



import "./utilities/nav.js";


angular 
    .module('app',['ui.router','ngCookies'])
    .config(config)
    .constant('SERVER', server)
    .controller('HomeController', HomeController)
    .controller('RegisterController',registerUser)    
    .controller('LoginController', Login)  
    .controller('ProfileFormController', profileInfo)
    .service('requests', requests)
    

;




