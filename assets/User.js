class User{

    userAllowed = [
       {
            email: "desenvolvedor.contato@gmail.com",
            password: "2121213"
       },
       {
            email: "contato@gmail.com",
            password: "2121213"
       }
    ];
    
    login(email, password){
        this.userAllowed.map(function(item, index){
            
            if(item.email === email && item.password === password){
                alert('SUCESSO')
            }

        });
    }

    logout(){

    }
}
