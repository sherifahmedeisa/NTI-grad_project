let email = document.getElementById('userEmail');
let button = document.getElementById("button-addon2");

button.addEventListener("click",

    function (event) {
        event.preventDefault();
        let emailValue = email.value;
        console.log(emailValue)

        email.value = " ";
    });



let cartItem = document.querySelectorAll('.cart');
let subtotalItem = document.getElementById('Subtotal');
let totalItem = document.getElementById('Total');

let currentTotal = 234.00;

cartItem.forEach((item) => {
    let decreaseBtn = item.querySelector('.decrease')
    let increaseBtn = item.querySelector('.increase')
    let valueBtn = item.querySelector('.value')




    let count = +valueBtn.textContent;

    let itemRow = item.closest('.row');
    let priceElement = itemRow.querySelector('.price');
    let itemPrice = +priceElement.getAttribute('data-price');


    increaseBtn.addEventListener('click', () => {
        count++;
        valueBtn.textContent = count;

        currentTotal = currentTotal + itemPrice;

        subtotalItem.textContent = '$' + currentTotal.toFixed(2);
        totalItem.textContent = '$' + currentTotal.toFixed(2);



    });


    decreaseBtn.addEventListener('click', () => {
        if (count > 1) {

            count--;
            valueBtn.textContent = count;

            currentTotal = currentTotal - itemPrice;

            subtotalItem.textContent = '$' + currentTotal.toFixed(2);
            totalItem.textContent = '$' + currentTotal.toFixed(2);

        }
    });
});


const Badge = document.querySelector('.badge');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        Badge.textContent = cartCount;
    });
});


const wishlistButtons = document.querySelectorAll('.heart-btn');
wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = button.querySelector('i');
        if (icon.classList.contains('far') || icon.classList.contains('fa-regular')) {
            icon.classList.remove('far', 'fa-regular')
            icon.classList.add('fas', 'fa-solid');
            icon.style.color = 'red';
        } else {
            icon.classList.remove('fas', 'fa-solid');
            icon.classList.add('far', 'fa-regular');
            icon.style.color = '';
        }
    });
});