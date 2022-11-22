// ej kopierat 

var basket = ['test'];

let addToCart = (id) => {
    let selectedItem = id;
    console.log(selectedItem.id)
    if (selectedItem.id == 'add-fps-1') {
        console.log('succsess')
        basket.push('yes')
        saveBasket();

    } else {
        console.log('fail')
    }
}

function saveBasket() {
    localStorage.setItem('basketData', JSON.stringify(basket));
}

saveBasket();
