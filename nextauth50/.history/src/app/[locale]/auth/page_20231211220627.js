export default function auth() {
  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex ">
      <h2 className="text-3xl font-bold">Đăng nhập</h2>
      <div>
        <button>Đăng nhập với Google</button>
        <button>Đăng nhập với Github</button>
      </div>
      <p>
        "Đăng nhập để liên hệ, bình luận và khám phá nhiều tính năng thú vị"
      </p>
    </div>
  );
}
