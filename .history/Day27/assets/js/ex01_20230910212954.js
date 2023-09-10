const listProduct = document.querySelector(".list-proc");
const tbody = listProduct.querySelector("tbody");
const cartProc = document.querySelector(".cart-proc");
let number = 0;

//Danh sách mặt hàng
const Products = [
  { id: 1, name: "Sản phẩm 1", price: 1000, number: 1000 },
  { id: 2, name: "Sản phẩm 2", price: 2000, number: 1000 },
  { id: 3, name: "Sản phẩm 3", price: 3000, number: 1000 },
  { id: 4, name: "Sản phẩm 4", price: 4000, number: 1000 },
];
console.log(Products);
const Product = function (id, name, price, number) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.number = number;
};

for (let i = 0; i < Products.length; i++) {
  listProduct.innerHTML += `
  <tr>
  <td>${i + 1}</td>
  <td>${Products[i].name}</td>
  <td>${Products[i].price}</td>
  <td><input type = "number" value = "1"/>
  <button class = "btn-add">Thêm vào giỏ hàng</button>
  </td>
  </tr>
  `;
}

const btnAdd = document.querySelectorAll(".btn-add");
btnAdd.forEach((btn) => {
  btn.addEventListener("click", function () {});
});

//Constructor của product
