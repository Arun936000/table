function loginpage(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    if(email == null || email == ""){
        alert("Email must be entered");
        return false
    }
    else if(pass == null || pass == "" ){
        alert("Password cannot be empty")
        return false
    }
    else{
        location.href='home.html';
    }
}
