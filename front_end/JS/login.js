//Login Button EventListener
document.getElementById("LoginBtn").addEventListener("click", function(){
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    /*Check username and password*/
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        alert("Wrong Username or Password. Please try again.");
    }

});

/* Login Page to connect the Login Button in
    Index to the Sign In Page */
document.getElementById('login').addEventListener('click', function () {
    window.location.href = 'signin_page.html';
});
