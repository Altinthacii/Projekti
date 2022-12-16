const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

// validimi i login formes
function validateLogin() {
    var email = document.forms["logForm"]["email"].value;
    var password = document.forms["logForm"]["password"].value;

    document.getElementById('error-msg').innerHTML = "";
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "*Ju lutem shenoni nje Email*";
        return false;
    }
    if (password == "" || password == null) {
        document.getElementById('error-msg').innerHTML = "*Ju lutem jepni nje Password*";
        return false;
    }
}

// validimi i register formes
function validateReg() {
    var name = document.forms["regForm"]["name"].value;
    var email = document.forms["regForm"]["email"].value;
    var password = document.forms["regForm"]["password"].value;
    var conPassword = document.forms["regForm"]["conPassword"].value;

    document.getElementById('error-msgReg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msgReg').innerHTML = "*Ju lutem shenoni Emrin tuaj*";
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msgReg').innerHTML = "*Ju lutem shenoni nje Email*";
        return false;
    }
    if (password == "" || password == null) {
        document.getElementById('error-msgReg').innerHTML = "*Ju lutem jepni nje Password*";
        return false;
    }
    if (conPassword == "" || conPassword == null) {
        document.getElementById('error-msgReg').innerHTML = "*Ju lutem konfirmoni Passwordin*";
        return false;
    }
    if (conPassword != password) {
        document.getElementById('error-msgReg').innerHTML = "*Ju lutem jepni passwordin e njejt*";
        return false;
    }
}