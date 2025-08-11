export const cart = []

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
      quantity: 1
   })
  }
}