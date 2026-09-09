
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let address = document.getElementById('inputAddress');
let cardNumber = document.getElementById('cardNumber');
let expirationDate = document.getElementById('expirationDate');
let cvc = document.getElementById('cvc');

let firstNameValidationMessage = document.getElementById('firstNameValidationMessage');
let lastNameValidationMessage = document.getElementById('lastNameValidationMessage');
let phoneValidationMessage = document.getElementById('phoneValidationMessage');
let emailValidationMessage = document.getElementById('emailValidationMessage');
let addressValidationMessage = document.getElementById('addressValidationMessage');
let cardNumberValidationMessage = document.getElementById('cardNumberValidationMessage');
let expirationDateValidationMessage = document.getElementById('expirationDateValidationMessage');
let cvcValidationMessage = document.getElementById('cvcValidationMessage');

let placeOrderButton = document.getElementById('placeOrderButton');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

let addOne = (productId) => {
    let item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity++;
        item.subtotal = item.price * item.quantity;
        saveCart();
        renderCheckoutSummary();
    }
};

let removeOne = (productId) => {
    let item = cart.find(p => p.id === productId);
    if (item) {

        item.quantity--;
        item.subtotal = item.price * item.quantity;
        saveCart();
        renderCheckoutSummary();
    }
};

let renderCheckoutSummary = () => {
    let container = document.getElementById('checkoutItemsContainer');

    container.innerHTML = '';
    cart = JSON.parse(localStorage.getItem('cart'));


    let totalSubtotal = 0;

    cart.forEach(item => {
        let subtotal = (item.price * item.quantity);
        totalSubtotal += subtotal;

        container.innerHTML += `
        <div class="col-12 my-4 row itemManagement" id="${item.id}">
            <div class="col-3">
                <img src="${item.image}" alt="" class="w-100">
            </div>
            <div class="col-md-5 col-5 text-start row">
                <h6>${item.name}</h6>
                <p class="text-secondary mb-1">color: <span>${item.color}</span></p>
                <div class="btn-group btn-group-sm col-md-6 p-1">
                    <button type="button" class="btn btn-outline-secondary border-end-0 removeone" id="${item.id}">-</button>
                    <span class="btn btn-outline-secondary border-end-0 border-start-0 quantity">${item.quantity}</span>
                    <button type="button" class="btn btn-sm btn-outline-secondary border-start-0 addone" id="${item.id}">+</button>
                </div>
            </div>
            <div class="col-4 text-end">
                <span class="fw-bold">$ ${subtotal}</span>
            </div>
        </div>
        `;
    });

    container.querySelectorAll('.addone').forEach(btn => {
        btn.addEventListener('click', () => {
            let id = Number(btn.id);
            addOne(id);
        });
    });

    container.querySelectorAll('.removeone').forEach(btn => {
        btn.addEventListener('click', () => {
            let id = Number(btn.id);
            removeOne(id);
        });
    });

    updateCheckoutTotals(totalSubtotal);
};

let updateCheckoutTotals = (subtotal) => {
    let subtotalEl = document.getElementById('checkoutSubtotal');
    let totalEl = document.getElementById('checkoutTotal');
    let discountEl = document.getElementById('checkoutDiscount');

    let discount = discountEl ? parseFloat(discountEl.innerText) || 0 : 10.00;

    if (subtotalEl) {
        subtotalEl.innerText = `$ ${subtotal}`;
    }

    if (totalEl) {
        let finalTotal = subtotal > 0 ? Math.max(0, subtotal - discount) : 0;
        totalEl.innerText = `$ ${finalTotal}`;
    }
};

let validateFirstName = () => {
    return firstName.value.trim().length >= 3;
};

let validateLastName = () => {
    return lastName.value.trim().length >= 3;
};

let validatePhone = () => {
    return phone.value.trim().length >= 3;
};

let validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.value.trim());
};

let validateAddress = () => {
    return address.value.trim().length >= 3;
};



let validateCardNumber = () => {
    let val = cardNumber.value.trim();
    return val.length === 16;
};

let validateExpirationDate = () => {
    let val = expirationDate.value.trim();
    const expRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return expRegex.test(val);
};

let validateCvc = () => {
    let val = cvc.value.trim();
    return val.length === 3 && !isNaN(val);
};

let handleFormSubmit = (event) => {
    event.preventDefault();




    let isFirstNameValid = validateFirstName();
    firstNameValidationMessage.classList.toggle('d-none', isFirstNameValid);

    let isLastNameValid = validateLastName();
    lastNameValidationMessage.classList.toggle('d-none', isLastNameValid);

    let isPhoneValid = validatePhone();
    phoneValidationMessage.classList.toggle('d-none', isPhoneValid);

    let isEmailValid = validateEmail();
    emailValidationMessage.classList.toggle('d-none', isEmailValid);

    let isAddressValid = validateAddress();
    addressValidationMessage.classList.toggle('d-none', isAddressValid);

    let isCardNumberValid = validateCardNumber();
    cardNumberValidationMessage.classList.toggle('d-none', isCardNumberValid);

    let isExpirationDateValid = validateExpirationDate();
    expirationDateValidationMessage.classList.toggle('d-none', isExpirationDateValid);

    let isCvcValid = validateCvc();
    cvcValidationMessage.classList.toggle('d-none', isCvcValid);

    let isAllValid = isFirstNameValid && isLastNameValid && isPhoneValid && isEmailValid && isAddressValid && isCardNumberValid && isExpirationDateValid && isCvcValid;

    if (isAllValid) {
        cart = JSON.parse(localStorage.getItem('cart'));
        let totalEl = document.getElementById('checkoutTotal');
        let orderData = {
            orderNumber: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            total: totalEl ? totalEl.innerText : "$ 0.00",
            items: cart
        };
        localStorage.setItem('Order', JSON.stringify(orderData));

        localStorage.setItem('cart', JSON.stringify([]));



        let user = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            phone: phone.value.trim(),
            email: email.value.trim(),
            address: address.value.trim(),
            cardNumber: cardNumber.value.trim(),
            expirationDate: expirationDate.value.trim(),
            cvc: cvc.value.trim()
        };
        console.log(user);
        window.location.href = 'OrderComplete.html';
    }
};
if (placeOrderButton) {
    placeOrderButton.addEventListener('click', handleFormSubmit);
}

renderCheckoutSummary();