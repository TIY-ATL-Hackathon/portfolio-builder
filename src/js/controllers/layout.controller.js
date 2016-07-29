function LayoutController($state, $cookies) {
	let vm = this; 
	vm.username = $cookies.get('username');
}

LayoutController.$inject = ['$state', '$cookies'];
export {LayoutController};