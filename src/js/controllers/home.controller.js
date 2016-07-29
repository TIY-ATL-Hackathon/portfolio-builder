function HomeController ($http, SERVER){

	let vm = this;
    vm.cow = function(){
 
    };
    vm.cow();
	

}

HomeController.$inject = ['$http','SERVER']

export {HomeController};