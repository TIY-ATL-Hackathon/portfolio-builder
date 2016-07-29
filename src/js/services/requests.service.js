function requests ($http, SERVER, $cookies) {
	
	this.register   = register;
	this.login      = login;
	this.submitPro  = submitPro;
	this.putProfile = putProfile;
	this.get_userPro = get_userPro;
	this.get_userGithub = get_userGithub;

	this.githubComb = githubComb;

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

	function githubComb(obj){

		let git_obj = {};
		git_obj.repos =[];
        git_obj.img = obj.user_obj.avatar_url;
        git_obj.github_link = obj.user_obj.html_url;
        git_obj.username = obj.user_obj.name;
        git_obj.blog = obj.user_obj.blog;
        git_obj.location = obj.user_obj.location;
        git_obj.email = obj.user_obj.email;
        git_obj.bio = obj.user_obj.bio;

        obj.repos.forEach((repo)=>{
        	let repo_obj = {};
        	repo_obj.repo_link = repo.html_url;
        	repo_obj.repo_desc = repo.description;
        	repo_obj.repo_name = repo.name;
        	repo_obj.repo_lang = repo.language;
        	git_obj.repos.push(repo_obj);
        })

		return git_obj;
	}




}








requests.$inject = ['$http', 'SERVER','$cookies'];

export {requests};