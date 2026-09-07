// // this file will handle the cart adding asuming that the items pre-saved in Static array of objects by name cart
// author :Sherif Ahmed

let products = [
    {
        id: 1,
        name: "tray table",
        price: 100,
        quantity: 0,
        category: "furniture",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPZ5Eo3g3NnkUa_-bG3Ypz86_jX4zCLyfYKvIuMyV3Q&s=10"
    },
    {
        id: 2,
        name: "Table lamp",
        price: 50,
        quantity: 0,
        category: "electronics",
        image: "https://static.vecteezy.com/system/resources/thumbnails/070/668/034/small/elegant-table-lamp-with-beige-shade-and-wooden-base-isolated-on-white-background-photo.jpeg"
    }   

]
let cart = [];
addToCart = (productId) => {
    let productindex = products.findIndex(p => p.id === productId);
    let product = products[productindex];
    let subtotal = product.price * product.quantity;
    product.subtotal = subtotal;
    let removeIndex = cart.findIndex(p => p.id === productId);
    if (removeIndex !== -1) {
        cart.splice(removeIndex, 1);
    }
    let addOne = () => {
        product.quantity++;
    };
    product.addOne = addOne;
    let removeOne = () => {
        if (product.quantity > 0) {
            product.quantity--;
        }
    }
    product.removeOne = removeOne;
    cart.push(products[productindex]);
}

addToCart(1);
addToCart(2);

let item = document.querySelector('.itemManagement');
setCart = (id) => {
    let i = cart.findIndex(p => p.id === id);
    let item = cart[i];
    let img = document.getElementById('img');
    let name = document.getElementById('name');
    let price = document.getElementById('price');
    let quantity = document.getElementById('quantity');
    let subtotal = document.getElementById('subtotal');
    let removeButton = document.getElementById('removeButton');
    let addone = document.getElementById('addone');
    let removeone = document.getElementById('removeone');
    name.textContent = item.name;
    price.textContent = item.price;
    quantity.textContent = item.quantity;
    subtotal.textContent = item.subtotal;
    addone.addEventListener('click', () => {
        item.addOne();
        quantity.textContent = item.quantity;
        subtotal.textContent = item.subtotal;
    });
    removeone.addEventListener('click', () => {
        item.removeOne();
        quantity.textContent = item.quantity;
        subtotal.textContent = item.subtotal;
    }); 
    removeButton.addEventListener('click', () => {
        cart.remove(i);

    });
}   


setCart(1);

console.log(item);






