function LayoutController($state, $cookies) {
	let vm = this; 
	vm.loggedIn = $cookies.get('loggedIn');
	vm.username = $cookies.get('username');

	console.clear();
	console.log(vm.loggedIn);
	
	vm.logout   = function(){
		$cookies.put('loggedIn', false);
		$state.go('root.home')
	}
}

LayoutController.$inject = ['$state', '$cookies'];
export {LayoutController};