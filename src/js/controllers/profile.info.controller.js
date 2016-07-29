function profileInfo ($state, requests, $http, SERVER) {
	let vm = this
	vm.submit = function(proinfo){
		requests.submitPro(proinfo).then((res)=>{
        	console.log(res)   
        	$cookies.put('github', res.data.username);

		});
		console.log('hi');
	};
  

	// vm.testget = function (){
	// 	console.log('hi')
	// 	requests.test();
	// }
	// vm.testget();
}

profileInfo.$inject = ['$state', 'requests','$http', 'SERVER'];
export {profileInfo};
