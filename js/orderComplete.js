let orderData = JSON.parse(localStorage.getItem('Order'));

let savedCart = JSON.parse(localStorage.getItem('cart'));
let totalVal = 0;
savedCart.forEach(p => {
    totalVal += p.price * p.quantity;
});
orderData = {
    orderNumber: Date.now(),
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    total: `$ ${totalVal}`,
    items: savedCart
};
localStorage.setItem('Order', JSON.stringify(orderData));



let container = document.getElementById('orderItemsContainer');
let orderNumber = document.getElementById('orderNumber');
let orderDate = document.getElementById('orderDate');
let orderTotal = document.getElementById('orderTotal');

let renderOrderComplete = () => {
    container.innerHTML = '';
    orderNumber.innerText = orderData.orderNumber;
    orderDate.innerText = orderData.date;
    orderTotal.innerText = orderData.total;

    orderData.items.forEach(item => {
        container.innerHTML += `
        <div class="col-4 col-md-2 mx-3 my-2 position-relative">
            <img src="${item.image}" alt="" class="w-100">
            <div class="position-absolute top-0 end-0 translate-end bg-dark text-white rounded-circle d-flex justify-content-center align-items-center"
                style="width: 30px; height: 30px;">
                <span class="fs-6">${item.quantity}</span>
            </div>
        </div>
        `;
    });
};

renderOrderComplete();
