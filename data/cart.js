export let cart;

loadFromStorage()

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'))||[{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1'
  },{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId:'2'
  }]
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export function addToCart(productID){
  let matching
  cart.forEach((item) => {
    if(productID == item.id)
      matching = item
  })
  if(matching){
    matching.quantity+=1
  }else{
    cart.push({
      id:productID,
      quantity: 1,
      deliveryOptionId:'1'
   })
  }
  saveToStorage()
}


export function removeFromCart(productId){
  const newArr = []
  cart.forEach((cartItem)=>{
    if(cartItem.id != productId)
      newArr.push(cartItem)
  })
  cart = newArr 
  saveToStorage()
}


export function updateDeliveryOption(productID,deliveryOptionId){
  let matching
  cart.forEach((item) => {
    if(productID == item.id)
      matching = item
  })
  matching.deliveryOptionId = deliveryOptionId
  saveToStorage()
}

export function loadCart(fun){
  fetch('https://supersimplebackend.dev/cart')
    .then(res => {
      if(!res.ok) throw new Error('Network response was not ok')
      return res.json()
    })
    .then(data => {
      console.log(data)
      fun && fun()
    })
    .catch(err => {
      console.error('Failed to load cart', err)
      fun && fun() // still call to avoid blocking UI/tests
    })
}