function config ($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('root',{
            abstract: true,
            templateUrl: 'templates/layout.temp.html'
        })

        .state('root.home',{

        	url: '/',
        	templateUrl: 'templates/home.temp.html',
        	controller: 'HomeController as vm'


        })

        $urlRouterProvider.otherwise('/');
       


}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export {config};

