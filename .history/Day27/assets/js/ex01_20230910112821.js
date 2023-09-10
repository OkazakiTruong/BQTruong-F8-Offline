const cartProcducts = document.querySelector(".cart-products");
const btnAdds = document.querySelectorAll(".btn-add");
const productNames = document.querySelectorAll(".product-name");
const productPrices = document.querySelectorAll(".product-price");
const productNumbers = document.querySelectorAll(".product-number");
const tableCartProduct = document.querySelector(".table-cart-products");
const totalNumber = tableCartProduct.querySelector(".total-number");
const totalPrice = tableCartProduct.querySelector(".total-price");

console.log(cartProcducts.children);

console.log(totalNumber.innerText);

const number = 0;
const updateCart = function () {
  if (totalNumber.innerText === "0") {
    const p = document.createElement("p");
    p.innerText = "Không có sản phẩm nào trong giỏ hàng!!!";
    cartProcducts.append(p);
    number = 0;
  } else {
    p.remove();
  }
};

updateCart();

const AddNewProduct = function (index) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = "";
};

btnAdds.forEach(function (btnAdd, index) {
  btnAdd.addEventListener("click", function () {
    AddNewProduct(index);
  });
});
