const home = document.querySelector('#home');
const customer = document.querySelector('#customer');
const store = document.querySelector('#store');
const orders = document.querySelector('#orders');

const customer_div =  document.querySelector('#customer-div');
const item_div =  document.querySelector('#item-div');
const order_div =  document.querySelector('#order-div');

const main_div =  document.querySelector('#main-div');


home.addEventListener('click' , ()=>{
    event.preventDefault();
    main_div.style.display = 'none';

});

customer.addEventListener('click' , ()=>{
    event.preventDefault();
    customer_div.style.display = 'block';

});

document.addEventListener('DOMContentLoaded',handleResize);