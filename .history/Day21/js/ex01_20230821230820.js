//exercise 01
const errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

const getError = function (field) {
  return errors[field] ? Object.values(errors[field])[0] : "No Error";
};

console.log(getError("name"));

//exercise 02
const Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: "20", address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const createCustomers = function (customers) {
  return customers.map(function (customer) {
    if (
      typeof customer.name !== "string" ||
      typeof customer.age !== "number" ||
      typeof customer.address !== "string"
    ) {
      customer.error = "giá trị nhập vào không chính xác!!!";
      return customer;
    } else {
      customerNameArr = customer.name.split(" ");
      customer.shortName =
        customerNameArr[0] + " " + customerNameArr[customerNameArr.length - 1];
      return customer;
    }
  });
};

let result = createCustomers(customers);
console.log(result);

//exercise 03
