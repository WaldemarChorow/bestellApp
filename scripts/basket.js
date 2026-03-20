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
    
    console.log("Namen im Korb:", basketNames);
    console.log("Preise im Korb:", basketPrices);
    console.log("Mengen im Korb:", basketAmounts);

    renderBasket();
    render();
}

function calculateTotals() {
    let subtotal = 0;
    
    for (let i = 0; i < basketPrices.length; i++) {
        subtotal += basketPrices[i] * basketAmounts[i];
    }

    let deliveryFee = 4.99;
    let total = subtotal + deliveryFee;

    document.getElementById('subtotal').innerHTML = subtotal.toFixed(2).replace('.', ',') + '€';
    document.getElementById('total').innerHTML = total.toFixed(2).replace('.', ',') + '€';
}
