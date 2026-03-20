
function getMenuTemplate(item) {
    let basketIndex = basketNames.indexOf(item.name);
    let buttonHTML = `<button class="addButton" onclick="addToBasket('${item.name}', ${item.price})">Add to basket</button>`;
    let descriptionClass = 'court-description'; 

    if (basketIndex !== -1) {
        let amount = basketAmounts[basketIndex];
        buttonHTML = `<button class="addedButton" onclick="addToBasket('${item.name}', ${item.price})">Added ${amount}</button>`;
        
        descriptionClass = 'court-descriptionAdded'; 
    }

    return `
    <div class="court">
        <img src="${item.image}" alt="Foto von ${item.name}">
        <div class="${descriptionClass}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
        <div class="price-section">
            <h3>${item.price.toFixed(2).replace('.', ',')}€</h3>
            ${buttonHTML}
        </div>
    </div>
    `;
}

function getBasketItemTemplate(i) {
    let name = basketNames[i];
    let price = basketPrices[i];
    let amount = basketAmounts[i];

    // Preis mal Menge rechnen und mit Komma formatieren
    let itemTotalPrice = (price * amount).toFixed(2).replace('.', ',');

    return `
        <div class="basket-item">
            <div class="basket-item-content">
                <b>${name}</b>
                <button class="btn-delete" onclick="deleteAmount(${i})"></button>                
            </div>
            <div class="basket-item-controls">
                <div class="basket-item-controls-crowd">
                    <button class="btn-decrease" onclick="decreaseAmount(${i})">-</button>
                    <span class="item-amount">${amount}</span>
                    <button class="btn-increase" onclick="increaseAmount(${i})">+</button>
                </div>
                <span>${itemTotalPrice}€</span>
            </div>
        </div>
    `;
}