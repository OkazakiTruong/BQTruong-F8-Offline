"use server";

import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export default async function addNewAction(id) {
  const { user } = await getSession();
  const data = {
    userId: user?.sub,
    name: "Mindmap không tên",
    title: "Chưa có title",
    data: [],
  };
  const res = await fetch(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const data2 = await res.json();
  console.log(data2);
  if (res.status === 201) {
    console.log("Thêm thành công");
    return redirect(`/mindmap/${id}`);
  }
}
