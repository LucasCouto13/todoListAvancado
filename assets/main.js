
var myUser = new User();

$(document).ready(function(){




    $("#buttonSignIn").click(function(){

        var emailValue = $("#inputEmail").val();
        var passwordValue = $("#inputPassword").val();

        myUser.login(emailValue, passwordValue);

    });    


})