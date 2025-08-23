class Cart{
  cartItems
  localStorageKey

  constructor(localStorageKey){
    this.localStorageKey = localStorageKey
    this.loadFromStorage()
  }

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey))||[{
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2,
      deliveryOptionID:'1'
    },{
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionID:'2'
    }]
  }

  saveToStorage(){
    localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems))
  }

  addToCart(productID){
    let matching
    this.cartItems.forEach((item) => {
      if(productID == item.id)
        matching = item
    })
    if(matching){
      matching.quantity+=1
    }else{
      this.cartItems.push({
        id:productID,
        quantity: 1,
        deliveryOptionID:'1'
    })
    }
    this.saveToStorage()
  }

  removeFromCart(productId){
    const newArr = []
    this.cartItems.forEach((cartItem)=>{
      if(cartItem.id != productId)
        newArr.push(cartItem)
    })
    this.cartItems = newArr 
    this.saveToStorage()
  }

  updateDeliveryOption(productID,deliveryOptionID){
    let matching
    this.cartItems.forEach((item) => {
      if(productID == item.id)
        matching = item
    })
    matching.deliveryOptionID = deliveryOptionID
    this.saveToStorage()
  }
}


const cart = new Cart('cart-oop')
const businessCart = new Cart('cart-business')



console.log(businessCart instanceof Cart)


