import { client } from "./client.js";
import { requestRefresh } from "./token.js";
const header = document.querySelector(".header");

const refreshToken = async () => {
  const tokens = localStorage.getItem("login_token");
  let { refreshToken } = JSON.parse(tokens);
  console.log(refreshToken);
  // let tokensRefresh = requestRefresh(JSON.parse(refreshToken));
  console.log(tokensRefresh);
  // localStorage.setItem("login_token", JSON.stringify(tokens));
};
const handlePost = async (data) => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    let { accessToken } = JSON.parse(tokens);
    console.log(accessToken);
    client.setToken(accessToken);
    const { response } = await client.post("/blogs", data);
    if (response.status === 401) {
      refreshToken();
    }
  }
};

function renderFormPost() {
  let html = `
  <h1>Xin chào Trưởng</h1>
  <form action="#" class="form-blog-post">
    <label>
      <span>Nhập tiêu đề</span>
      <input
        type="text"
        class="input-title"
        placeholder="Enter your title"
        required/>
    </label>
    <label>
      <span>Nhập nội dung</span>
      <textarea
        class="input-content"
        placeholder="Enter your content"
        required
      ></textarea>
    </label>
    <button class="btn-post-blog">Đăng bài</button>
  </form>
  `;
  header.innerHTML = html;
  const title = document.querySelector(".header .input-title");
  const content = document.querySelector(".header .input-content");
  const formBlogPost = document.querySelector(".form-blog-post");
  formBlogPost.addEventListener("submit", (e) => {
    e.preventDefault();
    handlePost({ title: title.value, content: content.value });
  });
}
function renderLoginCase() {
  let html = `
<h1>Blogger</h1>
 <button class="btn-login">Đăng nhập ngay</button>
  `;
  header.innerHTML = html;
  const btnLogin = header.querySelector(".btn-login");
  btnLogin.addEventListener("click", () => {
    console.log("onclick");
    window.location.href = "././login.html";
  });
}
function isLogin() {
  const token = localStorage.getItem("login_token");
  console.log(token);
  if (token) {
    renderFormPost();
  } else {
    renderLoginCase();
  }
}
isLogin();
function renderBlogs(blogs) {
  const blogsEl = document.querySelector(".blogs");
  const html = blogs.map(
    (blog) => `
    <div class="blog-item">
    <div class="blog-header">
      <div class="blog-left">
        <div class="blog-author-img">
        ${blog.userId.name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <div class="blog-author">${blog.userId.name}</div>
          <div class="time-post">5 phút trước</div>
        </div>
      </div>
      <div class="blog-right">
        <div class="date-post">Ngày đăng: 20/10/2023</div>
      </div>
    </div>
    <div class="blog-content">
      <h2 class="title">${blog.title}</h2>
      <p class="content">${blog.content}</p>
    </div>
    <div class="blog-tags">
      <div class="blog-tag-item"># <a>View more</a></div>
      <div class="blog-tag-item"># ${blog.userId.name}</div>
    </div>
  </div>
  `
  );
  blogsEl.innerHTML = html;
}
const getPost = async () => {
  const { data: blogs, response } = await client.get("/blogs");
  renderBlogs(blogs.data);
};

getPost();
