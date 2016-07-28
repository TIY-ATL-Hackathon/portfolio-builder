function Login($state, requests, $cookies){
	let vm = this;
	vm.gd = function(){
		console.log($cookies.get('first_name'));
	}
	vm.gd();
	vm.login = function(user){
		requests.login(user).then((res)=>{
			if ($cookies.get('first_name') == undefined){
				$cookies.put('first_name', res.data.username);
				$cookies.put('access_token', res.data.access_token);

			}
			if (res.status === 200){
				$state.go('root.profile');	
			}
			console.log(res);
		});
	}


}


Login.$inject = ['$state', 'requests','$cookies'];
export {Login};