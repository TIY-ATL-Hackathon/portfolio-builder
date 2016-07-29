function requests ($http, SERVER, $cookies) {
	
	this.register   = register;
	this.login      = login;
	this.submitPro  = submitPro;
	this.putProfile = putProfile;
	this.get_userPro = get_userPro;
	this.get_userGithub = get_userGithub;
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

		function putProfile(profileInfo){

		return $http({ 
  method: 'PUT',
  url: SERVER.URL + 'profiles/lisasmith',
  headers: {
	"Access-Token": $cookies.get('access_token') 
  }, data: profileInfo
 //  data: { github_username: 'Rodneyfowlkes',
	// location: 'Chicago',
	// bio: 'None of Your business',
	// layout_choice: 4,
	// page_title: '4'}

});
	}

	function get_userPro(username){
		return $http.get(SERVER.URL + `profiles/${username}`);
	}

	function get_userGithub(username){
		return $http.get(SERVER.URL + `github/${username}`);
	}

}

requests.$inject = ['$http', 'SERVER','$cookies'];
export {requests};