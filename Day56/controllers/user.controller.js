const model = require("../models/index");
const { object, string, number, date, InferType } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Users = model.Users;

module.exports = {
  index: (req, res) => {},
  register: async (req, res) => {
    if (req.session.user) {
      return res.redirect("/");
    }
    res.render("register/register", { req });
  },
  handleRegister: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email!"),
      password: string().required("Không được bỏ trống mật khẩu!"),
      rePassword: string().required(
        "Không được bỏ trống phần nhập lại mật khẩu!"
      ),
    });
    if (body.password !== body.rePassword) {
      req.flash("errors", {
        errRepassword: "Mật khẩu không trùng khớp",
      });
      return res.redirect("/users/register");
    }
    if (body) {
      const check = await Users.findOne({ where: { user_email: body.email } });
      if (check !== null) {
        req.flash("errors", {
          emailExist: "Tài khoản đã tồn tại!!",
        });
        return res.redirect("/users/register");
      }
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(body.password, salt, async function (err, hash) {
          const user = await Users.create({
            user_email: body.email,
            user_password: hash,
          });
          if (user) {
            req.flash("msg", {
              msg: "Tạo tài khoản thành công!!!",
            });
            return res.redirect("/users/login");
          }
        });
      });
      // console.log(body);
      // return res.redirect("/users/login");
    } else {
      return res.redirect("/users/register");
    }
  },
  login: (req, res) => {
    if (req.session.user) {
      return res.redirect("/");
    }
    const msg = req.flash("msg");
    console.log(msg);
    res.render("login/login", { req, msg: msg[0] });
  },
  handleLogin: async (req, res) => {
    let body = await req.validate(req.body, {
      email: string().required("Không được bỏ trống Email!"),
      password: string().required("Không được bỏ trống mật khẩu!"),
    });
    if (body) {
      const check = await Users.findOne({ where: { user_email: body.email } });
      if (check === null) {
        req.flash("errors", {
          emailNotExist: "Tài khoản không tồn tại!!",
        });
        return res.redirect("/users/login");
      }
      console.log(check.user_password);
      bcrypt.compare(
        body.password,
        check.user_password,
        function (err, result) {
          if (!result) {
            req.flash("errors", {
              incorrectPassword: "Mật khẩu không chính xách",
            });
            return res.redirect("/users/login");
          }
          req.session.user = { userEmail: body.email };
          return res.redirect("/");
        }
      );
    } else {
      return res.redirect("/users/login");
    }
  },
  handleLogout: async (req, res) => {
    req.session.destroy(function (err) {
      // cannot access session here
      console.log(err);
    });
    res.redirect("/");
  },
};