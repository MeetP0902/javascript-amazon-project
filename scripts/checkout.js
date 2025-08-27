import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/OrderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js '


async function loadPage(){
  try {
    //throw 'error1'

    await loadProductsFetch()

    await new Promise((resolve,reject)=>{
      // throw 'error2'
      loadCart(()=>{
        //reject('error3')
        resolve()
      })
    })
  } catch (error) {
    console.log('error')
  }


  renderOrderSummary();
  renderPaymentSummary()

}

loadPage()

// Promise.all([
//   loadProductsFetch()
//   ,new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve()
//     })
//   })
// ]).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary()
// })


// loadProducts(()=>{
//   loadCart(()=>{
//    renderOrderSummary();
//    renderPaymentSummary();
//   })
// })




