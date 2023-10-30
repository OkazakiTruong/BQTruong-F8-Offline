import { Error } from "../Error";
import Navigo from "navigo";
const navigoRouter = new Navigo("/");
navigoRouter.updatePageLinks();

let body;
let display;

window.navigate = (path) => routerNavigo.navigate(path);
export const router = (listRouter, defaultLayout = null) => {
  //Tiến hành đăng ký route
  listRouter.forEach(({ path, component }) => {
    navigoRouter.on(path, () => {
      body = component();
    });
  });
  navigoRouter.resolve();
  if (defaultLayout) {
    display = defaultLayout().replace(/{body}/, body);
  } else {
    display = body;
  }
  navigoRouter
    .notFound(() => {
      display = Error();
      console.log(Error());
    })
    .resolve();
  return display;
};
