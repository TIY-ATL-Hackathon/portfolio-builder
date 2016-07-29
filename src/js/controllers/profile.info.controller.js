function profileInfo ($state, requests, $cookies) {
	let vm = this
	vm.submit = function(proinfo){
		requests.submitPro(proinfo).then((res)=>{
        	console.log(res)   
        	$cookies.put('layout_choice', res.data.layout_choice);
            $state.go('root.profile',{username: $cookies.get('username')});
		});
		console.log('hi');
	};
  

	// vm.testget = function (){
	// 	console.log('hi')
	
		            
	// 	// requests.get_userGithub('lisasmith').then((res)=>{
	// 	// 	console.log(res)
	// 	// });
	// }
	// vm.testget();

}

profileInfo.$inject = ['$state', 'requests','$cookies' ];
export {profileInfo};
