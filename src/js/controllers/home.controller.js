function HomeController ($http, GITSERVER){

	let vm = this;
    vm.cow = function(){
 
    };
    vm.cow();
	

}

HomeController.$inject = ['$http','GITSERVER']

export {HomeController};