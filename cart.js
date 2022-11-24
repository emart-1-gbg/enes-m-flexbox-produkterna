// hämtar information som sparas i sessionStorage
function getBasket() {
    basket = JSON.parse(sessionStorage.getItem("basketData")); 
}
getBasket()

// väljer html elementen som varukorg information visas i
const cartVisual = document.getElementById('cart-list')

// gör en ny array som behåller information
let cartData = []

// går igenom sesionSorage och lägger till array
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
    cartData.push(basket[i])
    console.log(`${cartData} is in cartData`)
}

// lägger varan i html
cartData.forEach((item)=>{
    li = document.createElement("li");
    li.innerText = item;
    cartVisual.appendChild(li);
  }
)

// hittar hur mychet varor det finns
function amount() {
    document.getElementById('amount').innerHTML = cartData.length
}

// köp button tar bort från listan 
function buyFunction() {
    if (cartData.length === 0) {
        alert('Din varukorg är tomt. Lägg till en vara först.')
    } else {
        const removeItems = document.getElementById('cart-list')
        while (removeItems.firstChild) {
            removeItems.removeChild(removeItems.lastChild);
            cartData = []
            amount()
        }
        alert('Ditt köp genomförs!');
    }
}

amount()