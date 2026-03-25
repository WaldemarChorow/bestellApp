
function render() {
    renderCategory('burger-menu', menuBurger);
    renderCategory('pizza-menu', menuPizza);
    renderCategory('salad-menu', menuSalad);
}

function renderCategory(containerId, menuArray) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    
    for (let index = 0; index < menuArray.length; index++) {
        let singleItem = menuArray[index];
        container.innerHTML += getMenuTemplate(singleItem);
    }
}

function renderCategory(containerId, menuArray) {
    let container = document.getElementById(containerId);
    container.innerHTML = "";
    
    for (let index = 0; index < menuArray.length; index++) {
        let item = menuArray[index];
        let basketIndex = basketNames.indexOf(item.name);
        let descriptionClass = 'court-description';
        let buttonHTML = `<button class="addButton" onclick="addToBasket('${item.name}', ${item.price})">Add to basket</button>`;
        
        if (basketIndex !== -1) {
            let amount = basketAmounts[basketIndex];
            descriptionClass = 'court-descriptionAdded';
            buttonHTML = `<button class="addedButton" onclick="addToBasket('${item.name}', ${item.price})">Added ${amount}</button>`;
        }
        
        let formattedPrice = item.price.toFixed(2).replace('.', ',');
        container.innerHTML += getMenuTemplate(item, descriptionClass, formattedPrice, buttonHTML);
    }
}

function renderBasket() {
    let basketItemsContainer = document.getElementById('basket-items');
    let basketEmpty = document.getElementById('basket-empty');
    let basketSummary = document.getElementById('basket-summary');

    basketItemsContainer.innerHTML = '';

    if (basketNames.length === 0) {
        basketEmpty.classList.remove('hidden');
        basketItemsContainer.classList.add('hidden');
        basketSummary.classList.add('hidden');
    } else {
        basketEmpty.classList.add('hidden');
        basketItemsContainer.classList.remove('hidden');
        basketSummary.classList.remove('hidden');

        for (let i = 0; i < basketNames.length; i++) {
            let name = basketNames[i];
            let price = basketPrices[i];
            let amount = basketAmounts[i];
            let formattedTotalPrice = (price * amount).toFixed(2).replace('.', ',');

            basketItemsContainer.innerHTML += getBasketItemTemplate(i, name, amount, formattedTotalPrice);
        }
    }
    calculateTotals();
}

function checkout() {
    basketNames = [];
    basketPrices = [];
    basketAmounts = [];
    renderBasket();
    render(); 

    
    let overlay = document.getElementById('order-confirmation-overlay');
    overlay.classList.remove('hidden');
    document.querySelector('.basket_wrapper').classList.remove('show-mobile');
}

function closeDialog() {
    let overlay = document.getElementById('order-confirmation-overlay');
    overlay.classList.add('hidden');
}