// ej kopierat 

var basket = [];

// funktionen är called med onclick i html. Hittar id:n och lägger den i basket
let addToCart = (id) => {
    let selectedItem = id;
    console.log(`pressed ${selectedItem.id}`)
    basket.push(selectedItem.id)
    saveBasket()
    console.log(`added ${selectedItem.id} to cart`)
}

// sparar med sessionStorage så den kan används i varukorg sidan
function saveBasket() {
    sessionStorage.setItem('basketData', JSON.stringify(basket));
}
saveBasket();