function validateEmail(val)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(val.match(mailformat))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function onLogin() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    var result = "";
    if(!validateEmail(document.getElementById("username").value)) {
        result = "Invalid Email";
    } else if(document.getElementById("password").value.length < 4) {
        result = "Invalid Password";
    } else if(document.getElementById("username").value == "testuser@gmail.com" && document.getElementById("password").value == "12345678") {
        result = "You are logged in successfully";
    } else {
        result = "Invalid username and password";
    }
    document.getElementById("snackbar").innerHTML = result;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
}