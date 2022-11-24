// ej kopierat 

var basket = [];

let addToCart = (id) => {
    let selectedItem = id;
    console.log(`pressed ${selectedItem.id}`)
    basket.push(selectedItem.id)
    saveBasket()
    console.log(`added ${selectedItem.id} to cart`)
}

function saveBasket() {
    sessionStorage.setItem('basketData', JSON.stringify(basket));
}
saveBasket();