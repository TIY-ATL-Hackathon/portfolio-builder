function Login($state, requests, $cookies){
	let vm = this;
	vm.gd = function(){
		console.log($cookies.get('first_name'));
	}
	vm.gd();
	vm.login = function(user){
		requests.login(user).then((res)=>{
			if ($cookies.get('username') == undefined){
				$cookies.put('username', res.data.username);
				$cookies.put('access_token', res.data.access_token);

			}
			if (res.status === 200){
				$state.go('root.profile',{username: $cookies.get('username')});	
			}
			console.log(res);
		});
	}


}


Login.$inject = ['$state', 'requests','$cookies'];
export {Login};