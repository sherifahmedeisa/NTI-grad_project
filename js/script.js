
let registerForm = document.querySelector("#registerForm")

let emailValidation = (element) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = element.value.trim();
    if (emailRegex.test(inputValue)) {
        handleError(element, "");
        return true;
    }
    else {
        handleError(element, "please enter your email");
        return false;
    };


}


let passwordValidation = (element) => {
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let inputValue = element.value;
    if (passwordReg.test(inputValue)) {
        handleError(element, "");
        return true;
    }
    else {
        handleError(element, "please enter at leaset 8 characters: 1 lowercase , 1 uppercase , 1 digit , 1 special character");
        return false;
    };

}

let emailInput = document.getElementById('userEmailInput');
let password = document.getElementById('userPasswordInput')
let buttonInput = document.getElementById("userButton");
let listUsers = [

]
buttonInput.addEventListener("click",
    function (event) {
        event.preventDefault();
        let user = {

        }
        let emailValue = emailValidation(emailInput);
        user.email = emailInput.value.trim()


        let passwordValue = passwordValidation(password);
        user.password = password.value


        if (!emailValue || !passwordValue) {
            return;
        }

        listUsers.push(user);
        console.log("Users:", listUsers)

        
        emailInput.value = "";
        password.value = "";
        window.location.href  = "index.html";
    });


let handleError = (element, msg) => {
    element.closest('.row').querySelector('small').innerText = msg
};

let togglePassword  = document.getElementById('togglePassword');
togglePassword.addEventListener('click' , function(){
    if(password.type === "password" ){
        password.type = "text";
        togglePassword.className = 'fa-regular , fa-eye' ;

    } 
    else{
        password.type = 'password';
        togglePassword.className = 'fa-regular , fa-eye slash';

    }

});














