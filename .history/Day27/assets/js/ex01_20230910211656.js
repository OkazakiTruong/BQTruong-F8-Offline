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
let html = "";
for (let index in Products) {
  console.log(Products[index].name);
  html += `<tr>
      <td>${++index}</td>
      <td>${Products[index].name}</td>
      <td>${Products[index].price}</td>
      <td><input type = "number" min ="1" max = "${
        Products[index].number
      }" value = 1/></td>

      </tr>`;
}

// }
console.log(html);
listProduct.innerHTML += html;

//Constructor của product
const Product = function (id, name, price, number) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.number = number;
};
