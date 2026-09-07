let email = document.getElementById('userEmail');
let button = document.getElementById("button-addon2");

button.addEventListener("click",

    function (event) {
        event.preventDefault();
        let emailValue = email.value;
        console.log(emailValue)

        email.value = " ";
    });



let cartItem = document.querySelectorAll('.cart')
cartItem.forEach((item) => {
    let decreaseBtn = item.querySelector('.decrease')
    let increaseBtn = item.querySelector('.increase')
    let valueBtn = item.querySelector('.value')

    

    let count = parseInt(valueBtn.textContent) || 1;
    increaseBtn.addEventListener('click', () => {
        count++;
        valueBtn.textContent = count;
        
        
    });
    decreaseBtn.addEventListener('click', () => {
        if (count > 1) {

            count--;
            valueBtn.textContent = count;
            
        }
    });
});