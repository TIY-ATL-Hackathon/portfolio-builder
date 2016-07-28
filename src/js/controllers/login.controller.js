function Login($state, requests, $cookies){
	let vm = this;
	vm.login = function(user){
		requests.login(user).then((res)=>{
			// if ($cookies.get('first_name') !== undefined){
	        $cookies.put('first_name', res.data.username);
			$cookies.put('access_token', res.data.access_token);
		// }
			console.log(res);
		});
	}


}


Login.$inject = ['$state', 'requests','$cookies'];
export {Login};