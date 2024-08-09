// Task 2:
// Given an array of product objects, each with properties name, category, and price, perform the following:

// Filter: Extract products in a specific category, e.g., "Electronics".

// Map: Extract the prices of these products and apply a discount of 10%

// Reduce: Calculate the total cost of these discounted products.

const products = [
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Shirt', category: 'Apparel', price: 40 },
  { name: 'Phone', category: 'Electronics', price: 800 },
  { name: 'Shoes', category: 'Apparel', price: 60 },
  { name: 'Tablet', category: 'Electronics', price: 500 }
];


















const Electronicproduct=products.filter((product)=>{
 return product.category==="Electronics"
})
console.log(Electronicproduct);


const discountprice=Electronicproduct.map((productdiscount)=>{
return productdiscount.price*0.90
})
console.log(discountprice);


const totalprice=discountprice.reduce((acc,prod)=>{
return acc+prod
},0)
console.log(totalprice);