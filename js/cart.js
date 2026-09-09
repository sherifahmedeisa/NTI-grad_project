// this file handles the cart and products using localStorage and innerHTML rendering
// author: Sherif Ahmed

let defaultProducts = [
    {
        id: 1,
        name: "Tray Table",
        price: 100,
        quantity: 0,
        category: "furniture",
        color: "black",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPZ5Eo3g3NnkUa_-bG3Ypz86_jX4zCLyfYKvIuMyV3Q&s=10"
    },
    {
        id: 2,
        name: "Table lamp",
        price: 50,
        quantity: 0,
        category: "electronics",
        color: "beige",
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/668/034/small/elegant-table-lamp-with-beige-shade-and-wooden-base-isolated-on-white-background-photo.jpeg"
    }
];

if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(defaultProducts));
}
let products = JSON.parse(localStorage.getItem('products'));

{
    let initialCart = [
        {
            id: 1,
            name: "Tray Table",
            price: 100,
            quantity: 2,
            category: "furniture",
            color: "black",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPZ5Eo3g3NnkUa_-bG3Ypz86_jX4zCLyfYKvIuMyV3Q&s=10",
            subtotal: 200
        },
        {
            id: 2,
            name: "Table lamp",
            price: 50,
            quantity: 1,
            category: "electronics",
            color: "beige",
            image: "https://static.vecteezy.com/system/resources/thumbnails/070/668/034/small/elegant-table-lamp-with-beige-shade-and-wooden-base-isolated-on-white-background-photo.jpeg",
            subtotal: 50
        }


    ];
    localStorage.setItem('cart', JSON.stringify(initialCart));
}

let cart = JSON.parse(localStorage.getItem('cart'));

let saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
let addToCart = (productId) => {
    let product = products.find(p => p.id === productId);

    let cartItem = cart.find(p => p.id === productId);
    if (cartItem) {
        cartItem.quantity++;
        cartItem.subtotal = cartItem.price * cartItem.quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            category: product.category,
            color: product.color,
            image: product.image,
            subtotal: product.price
        });
    }
    saveCart();
    renderCart();
}

let addOne = (productId) => {
    let item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity++;
        item.subtotal = item.price * item.quantity;
        saveCart();
        renderCart();
    }
}

function removeOne(productId) {
    let item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity--;
        item.subtotal = item.price * item.quantity;
    }
    saveCart();
    renderCart();
}

function removeItem(productId) {
    cart = cart.filter(p => p.id !== productId);
    saveCart();
    renderCart();
}

function updateSummary(total) {
    let subtotalElement = document.getElementById('cartSubtotal');
    let totalElement = document.getElementById('cartTotal');
    subtotalElement.innerText = total;
    totalElement.innerText = total;
}

function renderCart() {
    let container = document.getElementById('cartItemsContainer');
    container.innerHTML = '';
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    cart.forEach(item => {
        let subtotal = item.price * item.quantity;
        let price = item.price;
        total += subtotal;

        container.innerHTML += `
        <div class="row text-center itemManagement" id="${item.id}">
            <div class="col-12 col-md-5 row">
                <div class="col-4">
                    <img src="${item.image}" alt="" class="w-100">
                </div>
                <div class="col-md-4 col-8 text-start">
                    <h6>${item.name}</h6>
                    <p class="text-secondary">color: <span>${item.color || 'black'}</span></p>
                    <button type="button" class="btn-close float-end removeButton" id="${item.id}" aria-label="Close"></button>
                    <label class="d-none d-lg-block removeLabel" id="${item.id}" role="button" style="cursor: pointer;">Remove</label>
                    <div class="d-lg-none btn-group btn-group btn-group-sm col-md-4 p-5">
                        <button type="button" class="btn btn-outline-secondary border-end-0 removeone" id="${item.id}">-</button>
                        <span class="btn btn-outline-secondary border-end-0 border-start-0 quantity">${item.quantity}</span>
                        <button type="button" class="btn btn-sm btn-outline-secondary border-start-0 addone" id="${item.id}">+</button>
                    </div>
                </div>
            </div>
            <div class="col-md-7 row col-6">
                <div class="btn-group btn-group-sm col-md-4 p-5">
                    <button type="button" class="btn btn-outline-secondary border-end-0 d-none d-lg-inline removeone" id="${item.id}">-</button>
                    <span class="btn btn-outline-secondary border-end-0 border-start-0 d-none d-lg-inline quantity">${item.quantity}</span>
                    <button type="button" class="btn btn-sm btn-outline-secondary border-start-0 d-none d-lg-inline addone" id="${item.id}">+</button>
                </div>

                <div class="col-md-4 m-auto d-none d-lg-block">
                    <p class="fs-4">$<span> ${price}</span></p>
                </div>
                <div class="col-md-4 m-auto d-lg-block d-none">
                    <p class="fs-4">$<span> ${subtotal}</span></p>
                </div>
            </div>
        </div>
        <hr class="border-1">
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

    container.querySelectorAll('.removeButton, .removeLabel').forEach(btn => {
        btn.addEventListener('click', () => {
            let id = Number(btn.id);
            removeItem(id);
        });
    });

    updateSummary(total);
}


renderCart();
