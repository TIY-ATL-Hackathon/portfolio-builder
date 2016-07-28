function config ($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('root', {
            abstract: true,
            templateUrl: 'templates/layout.temp.html'
        })
        .state('root.home', {
        	url: '/',
        	templateUrl: 'templates/home.temp.html',
        	controller: 'HomeController as vm'
        })
        .state('root.login', {
            url: '/login',
            templateUrl: 'templates/login.temp.html'
        })
        .state('root.register', {
            url: '/register',
            templateUrl: 'templates/register.temp.html',
            controller: 'RegisterController as vm'

        })
        .state('root.profile', {
            url: '/profile/:id',
            templateUrl: 'templates/profile.temp.html'
        })
        .state('root.resume', {
            url: '/profile/:id/resume',
            templateUrl: 'templates/resume.temp.html'
        })
        .state('root.edit', {
            url: '/profile/:id/resume/edit',
            templateUrl: 'templates/edit.temp.html'
        })
        .state('root.error', {
            url: '/404',
            templateUrl: 'templates/error.temp.html'
        })

        $urlRouterProvider.otherwise('/404');
       


}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};

