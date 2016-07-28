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
            templateUrl: 'login.temp.html'
        })
        .state('root.register', {
            url: '/register',
            templateUrl: 'register.temp.html'
        })
        .state('root.profile', {
            url: '/profile/:id',
            templateUrl: 'profile.temp.html'
        })
        .state('root.resume', {
            url: '/profile/:id/resume',
            templateUrl: 'resume.temp.html'
        })
        .state('root.edit', {
            url: '/profile/:id/resume/edit',
            templateUrl: 'edit.temp.html'
        })
        .state('root.error', {
            url: '/404',
            templateUrl: 'error.temp.html'
        })

        $urlRouterProvider.otherwise('/404');
       


}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};

