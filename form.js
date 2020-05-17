function register() {
    var login= document.querySelector("#login");
    var register= document.querySelector("#register");

    login.style.width="0";
    login.style.transition="0s"
    login.style.display="none";
    register.style.width="100%";
    register.style.transition="0s";

    regbtn.style.background = "#C02425";
    regbtn.style.background = "-webkit-linear-gradient(to right, #F0CB35, #C02425);";
    regbtn.style.background = "linear-gradient(to right, #F0CB35, #C02425)";
    logbtn.style.background ="white";
}

function login() {
    var login= document.querySelector("#login");
    var register= document.querySelector("#register");

    login.style.width="100%";
    login.style.transition="0s";
    login.style.display="block";
    register.style.width="0";
    register.style.transition="0.0s";

    logbtn.style.background = "#C02425";
    logbtn.style.background = "-webkit-linear-gradient(to right, #F0CB35, #C02425);";
    logbtn.style.background = "linear-gradient(to right, #F0CB35, #C02425)";
    regbtn.style.background ="white";
}

var logbtn = document.querySelector("#logbtn");
var regbtn = document.querySelector("#regbtn");

