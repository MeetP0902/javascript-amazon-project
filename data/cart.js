export let cart;

loadFromStorage()

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'))||[{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionID:'1'
  },{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionID:'2'
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
      deliveryOptionID:'1'
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


export function updateDeliveryOption(productID,deliveryOptionID){
  let matching
  cart.forEach((item) => {
    if(productID == item.id)
      matching = item
  })
  matching.deliveryOptionID = deliveryOptionID
  saveToStorage()
}