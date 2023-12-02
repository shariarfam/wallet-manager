function validateLogin(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    // console.log(email);
    // console.log(pass);

    var validEmail = "jr.dev101@gmail.com";
    var validPassword = "123456#";
    
    if(email == validEmail && pass == validPassword){
        window.location.href = 'wallet.html';
    }
    else{
        alert('Invalid email or password. Please try again.');
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}
function login(){
    window.location.href = 'login.html';
}
function index(){
    window.location.href = 'https://github.com/shariarfam';
}