function requests ($http, SERVER, $cookies) {
	
    this.register  = register;
    this.login     = login;
 	this.submitPro = submitPro;
 	this.test      = test;
	function register(newUser){
		return $http.post(SERVER.URL + 'signup', newUser);
	}
	
	function login(existingUser){
		return $http.post(SERVER.URL + 'login', existingUser);
	}

	function submitPro(profileInfo){
		return $http({ 
  method: 'POST',
  url: SERVER.URL + 'profiles',
  headers: {
  	"Access-Token": $cookies.get('access_token') 
  },
  data: profileInfo

});
	}

		function test(profileInfo){
		return $http({ 
  method: 'PUT',
  url: SERVER.URL + 'profiles/lisasmith',
  headers: {
  	"Access-Token": $cookies.get('access_token') 
  },
  data: { github_username: 'Lisa Smith',
    location: 'Chicago',
    bio: 'None of Your business',
    layout_choice: 4,
    page_title: '4'}

});
	}

}

requests.$inject = ['$http', 'SERVER','$cookies'];
export {requests};