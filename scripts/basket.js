let basketNames = [];
let basketPrices = [];
let basketAmounts = [];

function addToBasket(name, price) {
    let index = basketNames.indexOf(name);
    
    if (index === -1) {
        basketNames.push(name);      
        basketPrices.push(price);    
        basketAmounts.push(1);       
    } 
    else {
        basketAmounts[index]++;
    }
    renderBasket();
    render();
}

function calculateTotals() {
    let subtotal = 0;

    // 1. Zwischensumme (Subtotal) ausrechnen
    for (let i = 0; i < basketPrices.length; i++) {
        subtotal += basketPrices[i] * basketAmounts[i];
    }

    // 2. Lieferkosten und Endsumme (Total) berechnen
    let deliveryFee = 4.99;
    let finalTotal = subtotal + deliveryFee;

    // 3. Zahlen ins HTML schreiben (mit Komma statt Punkt)
    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + '€';
    document.getElementById('total').innerHTML = finalTotal.toFixed(2).replace('.', ',') + '€';
    document.getElementById('checkout-btn').innerHTML = `Buy now <i>(${finalTotal.toFixed(2).replace('.', ',')}€)</i>`;
}

function increaseAmount(i) {
    basketAmounts[i]++;

    renderBasket(); 
    render();
}

function decreaseAmount(i) {
    if (basketAmounts[i] > 1) {
        basketAmounts[i]--;
    } else {
        basketNames.splice(i, 1);
        basketPrices.splice(i, 1);
        basketAmounts.splice(i, 1);
    }
    renderBasket();
    render(); 
}

function deleteAmount(i){
    basketNames.splice(i, 1);
    basketPrices.splice(i, 1);
    basketAmounts.splice(i, 1);

    renderBasket();
    render();
}