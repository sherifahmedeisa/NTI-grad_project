
let submitReviewBtn = document.getElementById('submitReviewBtn');
let reviewInput = document.getElementById('reviewInput');
let reviewCounters = document.querySelectorAll('.review-count');
submitReviewBtn.addEventListener('click', function() {
    let reviewText = reviewInput.value.trim();
    if (reviewText !== "") {
        reviewCounters.forEach(counter => {
            let currentCount = parseInt(counter.innerText);
            counter.innerText = currentCount + 1;
        });
        reviewInput.value = "";
    }   
});
let wishlistBtn = document.getElementById('wishlistBtn');
let heartIcon = document.getElementById('heartIcon');
wishlistBtn.addEventListener('click', function() {
    heartIcon.classList.toggle('fa-regular');
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('text-black');
});
let decreaseBtn = document.getElementById('decreaseBtn');
let increaseBtn = document.getElementById('increaseBtn');
let quantityValue = document.getElementById('quantityValue');
increaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityValue.innerText);
    quantityValue.innerText = currentValue + 1;
});
decreaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityValue.innerText);
    if (currentValue > 1) {
        quantityValue.innerText = currentValue - 1;
    }
});

