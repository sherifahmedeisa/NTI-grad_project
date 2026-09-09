

let gridToggleBtn = document.getElementById('gridToggleBtn');
let productItems = document.querySelectorAll('.product-items');
let sectionToHide = document.getElementById('sectionToHide');
let isWideView = true;
gridToggleBtn.addEventListener('click', function() {
    if (sectionToHide) {
        if (sectionToHide.style.display === 'none') {
            sectionToHide.style.display = '';   
        } else {
            sectionToHide.style.display = 'none'; 
        }
    }
    isWideView = !isWideView; 
    productItems.forEach(item => {
        if (isWideView) {
            
            item.className = "col-6 col-md-3 product-items"; 
        } else {
            
            
            item.className = "col-12 col-md-6 product-items d-flex justify-content-center"; 
        }
    });
    
});

function filterLivingRoom() {
    let allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        let title = card.querySelector('h6').innerText.toLowerCase();
        if (title.includes('cozy sofa') || title.includes('luxry sofa')) {
            card.parentElement.classList.remove('d-none');
        } else {
            card.parentElement.classList.add('d-none');
        }
    });
}
function showAllRooms() {
    let allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        card.parentElement.classList.remove('d-none');
    });
}
/////
function filterDining() {
    let allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        let title = card.querySelector('h6').innerText.toLowerCase();
        if (title.includes('black brow') || title.includes('table lamp')) {
            card.parentElement.classList.remove('d-none');
        } else {
            card.parentElement.classList.add('d-none');
        }
    });
}
