"use client";
import { revalidateTag } from "next/cache";
import addNewAction from "./addNewAction";
import { useRouter } from "next/router";
export default function MindmapHeading() {
  const router = useRouter();
  const addNewMindMap = async () => {
    try {
      const data = {
        userEmail: "buiquangtruong1105@gmail.com",
        name: "Mindmap không tên",
        title: "Chưa có title",
        data: [],
      };
      const res = await fetch("http://localhost:8080/api/v1/mindmap", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      });
      console.log(res);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2 className="text-4xl">Mindmap của tôi</h2>
      <button
        className="w-fit py-[10px] px-[20px] bg-blue-400 rounded-[10px] font-bold text-white mt-[20px] mb-[40px]"
        onClick={() => {
          addNewMindMap();
        }}
      >
        Thêm mới
      </button>
    </div>
  );
}
