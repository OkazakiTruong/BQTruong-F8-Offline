import Navigo from "navigo";
const navigoRouter = new Navigo("/");
console.log(navigoRouter);
let render;
export const router = (listRouter, defaultLayout = null) => {
  navigoRouter.on("/", function () {
    return "Home";
  });
};
