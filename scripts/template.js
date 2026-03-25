
function getMenuTemplate(item, descriptionClass, formattedPrice, buttonHTML) {
    return `
    <div class="court">
        <img src="${item.image}" alt="Foto von ${item.name}">
        <div class="${descriptionClass}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
        <div class="price-section">
            <h3>${formattedPrice}€</h3>
            ${buttonHTML}
        </div>
    </div>
    `;
}

function getBasketItemTemplate(i, name, amount, formattedTotalPrice) {
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
            <span>${formattedTotalPrice}€</span>
        </div>
    </div>
    `;
}