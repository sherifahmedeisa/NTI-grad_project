let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let address = document.getElementById('inputAddress');
let city = document.getElementById('inputCity');
let cardNumber = document.getElementById('cardNumber');
let expirationDate = document.getElementById('expirationDate');
let cvc = document.getElementById('cvc');



let firstNameValidationMessage = document.getElementById('firstNameValidationMessage');
let lastNameValidationMessage = document.getElementById('lastNameValidationMessage');
let phoneValidationMessage = document.getElementById('phoneValidationMessage');
let emailValidationMessage = document.getElementById('emailValidationMessage');
let addressValidationMessage = document.getElementById('addressValidationMessage');
let cityValidationMessage = document.getElementById('cityValidationMessage');
let cardNumberValidationMessage = document.getElementById('cardNumberValidationMessage');
let expirationDateValidationMessage = document.getElementById('expirationDateValidationMessage');
let cvcValidationMessage = document.getElementById('cvcValidationMessage');


let placeOrderButton = document.getElementById('placeOrderButton');

placeOrderButton.addEventListener('click', (event) => {
    let isValid = validateFirstName();
    handleFormSubmit(event, isValid);
});
handleFormSubmit = (event, isValid) => {
    event.preventDefault();

    if (isValid) {
        firstNameValidationMessage.classList.add('d-none');
    }
    else {
        firstNameValidationMessage.classList.remove('d-none');
    }

}
validateFirstName = () => {
    let isValid = true;
    if (firstName.value.trim().length < 3) {
        isValid = false;
    }
    return isValid;
}
validateLastName = () => {
    let isValid = true;
    if (lastName.value.trim().length < 3) {
        isValid = false;
    }
    return isValid;
}