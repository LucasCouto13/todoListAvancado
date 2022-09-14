
var myUser = new User();

function showTodoList(){
    $(".form-signin").hide('slow');
    $(".todo-container").show('slow');
}

$(document).ready(function(){

   var resultIsAuthenticated =  myUser.isAuthenticated();

   if(resultIsAuthenticated){
        showTodoList()
   }
   else{
     $(".form-signin").show('slow');
   }


    $("#buttonSignIn").click(function(){

        var emailValue = $("#inputEmail").val();
        var passwordValue = $("#inputPassword").val();

        var rememberMe = $("#remember_me").is(":checked");
        var resultLogin = myUser.login(emailValue, passwordValue, rememberMe);

        

        if(resultLogin == true){
            alert('USARIO LOGADO COM SUCESSO');
            showTodoList();
        }
        else{
            alert('Usário não logado, por favor verifique seus dados');
        }
    });    

})