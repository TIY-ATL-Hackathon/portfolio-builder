import angular from 'angular';
import 'angular-ui-router';
import {HomeController} from './controllers/home.controller.js'
import {config} from './utilities/config.js';
import {server} from './utilities/github.server.js';

angular 
    .module('app',['ui.router'])
    .controller('HomeController', HomeController)
    .config(config)
    .constant('GITSERVER', server)
;




