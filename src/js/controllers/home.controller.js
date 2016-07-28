function HomeController ($http, GITSERVER){

	let vm = this;
    vm.cow = function(){
    	$http({
    		method: 'GET',
    		url: GITSERVER.URL + '?'+GITSERVER.Token,
    		data: JSON.stringify({
    			client_id: GITSERVER.Token,
    			q: 'Rodney Fowlkes'
    		})
    	}).then((res)=>{
    		console.log(res)
    	})
    };
    vm.cow();
	

}

HomeController.$inject = ['$http','GITSERVER']

export {HomeController};