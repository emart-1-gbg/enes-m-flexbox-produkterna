// hämtar information
function updateBasket() {
    basket = JSON.parse(sessionStorage.getItem("basketData")); 
}
updateBasket()

// väljer html elementen som varukorg information visas i
const cartVisual = document.getElementById('cart-list')


let cartData = []

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
    cartData.push(basket[i])
    console.log(`${cartData} is in cartData`)
}

cartData.forEach((item)=>{
    li = document.createElement("li");
    li.innerText = item;
    cartVisual.appendChild(li);
  }
)

function buyFunction() {
    if (cartData.length === 0) {
        alert('Din varukorg är tomt. Lägg till en vara först.')
    } else {
        const removeItems = document.getElementById('cart-list')
        while (removeItems.firstChild) {
            removeItems.removeChild(removeItems.lastChild);
            basket = []
            updateBasket()
        }

        alert('Ditt köp genomförs!');
    }
}

