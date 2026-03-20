
function render() {
    let burgerContainer = document.getElementById('burger-menu');
    burgerContainer.innerHTML = "";
    for (let index = 0; index < menuBurger.length; index++) {
        let singleBurger = menuBurger[index];
    
        burgerContainer.innerHTML += getMenuTemplate(singleBurger);
    }

    let pizzaContainer = document.getElementById('pizza-menu');
    pizzaContainer.innerHTML = "";
    for (let index = 0; index < menuPizza.length; index++) {
        let singlePizza = menuPizza[index];

        pizzaContainer.innerHTML += getMenuTemplate(singlePizza);       
    }
    
    let saladContainer = document.getElementById('salad-menu');
    saladContainer.innerHTML = "";
    for (let index = 0; index < menuSalad.length; index++) {
        let singleSalad = menuSalad[index];

        saladContainer.innerHTML += getMenuTemplate(singleSalad);  
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
            basketItemsContainer.innerHTML += getBasketItemTemplate(i);
        }
    }

    calculateTotals(); 
}
