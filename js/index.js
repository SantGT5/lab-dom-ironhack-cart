// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let calSubTotal = price * quantity

  const subtotal = product.querySelector('.subtotal span').innerHTML  = calSubTotal;
  

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2

const allProducts = document.querySelectorAll('.product');


    let sum = 0;
    allProducts.forEach((product) => {
      updateSubtotal(product);
      sum = sum + parseFloat(product.querySelector('.subtotal span').innerHTML);
      return sum;
    });


  // ITERATION 3
  

let total = document.querySelector('#total-value span');
  total.innerText = sum;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

}

// ITERATION 5

function createProduct() {
  




}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
