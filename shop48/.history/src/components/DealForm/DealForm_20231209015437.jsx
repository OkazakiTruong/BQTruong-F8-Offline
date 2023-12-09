export default function DealForm() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-4 justify-center mt-[20px]">
        <span className="flex gap-x-2">
          <span className="bg-orange-200 pt-2 pb-2 pl-2 pr-2">T</span>
          <span>Ì</span>
          <span>M</span>
        </span>
        <span>
          <span>Ư</span>
          <span>U</span>
        </span>
        <span>
          <span>Đ</span>
          <span>Ã</span>
          <span>I</span>
        </span>
      </h2>
      <div className="flex justify-center gap-x-20 ">
        <div className="w-[50%]">
          <img
            src="https://code-fullstack-exercise49.vercel.app/images/book-img.svg"
            alt=""
          />
        </div>
        <div>Col-2</div>
      </div>
    </div>
  );
}
