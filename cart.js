//get them back

var basket = JSON.parse(sessionStorage.getItem("basketData")); 

const cartVisual = document.getElementById('cart-list')

for (let i = 0; i < basket.length; i++) {
    console.log(basket[i])
    if (i == 'fps-1') {
        cartVisual.innerHTML = 'testing'
        console.log('succsess')
    }
    
}