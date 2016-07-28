function requests ($http, SERVER) {
	
    this.register = register;
    this.login = login;

	function register(newUser){
		return $http.post(SERVER.URL + 'signup', newUser);
	}
	
	function login(existingUser){
		return $http.post(SERVER.URL + 'login', existingUser);
	}
}

requests.$inject = ['$http', 'SERVER'];
export {requests};