function registerUser(requests, $state, $cookies){
    let vm  = this;

    vm.submit = submit;

    function submit(user){

        requests.register(user).then((res)=>{
        console.log(res);
        $cookies.put('access_token', res.data.access_token);
        $cookies.put('first_name', res.data.first_name);
        $state.go('root.login');
        });

    }




}

registerUser.$inject = ['requests', '$state', '$cookies']
export {registerUser}