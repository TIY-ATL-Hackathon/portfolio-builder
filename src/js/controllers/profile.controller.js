function ProfileController($state, $stateParams, requests) {
	let vm = this;
	vm.username = $stateParams.username;
	vm.userGithub;
	vm.github = {};

	vm.get_usersGithub = function() {
		requests.get_userGithub($stateParams.username).then((res)=>{
			console.log(res);
			vm.userGithub = res.data;
            vm.github = requests.githubComb(vm.userGithub);


            console.log(requests.githubComb(vm.userGithub))
		});
	}
	vm.get_usersGithub();
	


	console.log('test');
    
}

ProfileController.$inject =['$state', '$stateParams', 'requests'];
export {ProfileController};