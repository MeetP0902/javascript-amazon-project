import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/OrderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js '


Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve('value1')
    })
  }),new Promise((resolve)=>{
    loadCart(()=>{
      resolve()
    })
  })
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary()
})


// loadProducts(()=>{
//   loadCart(()=>{
//    renderOrderSummary();
//    renderPaymentSummary();
//   })
// })




