"use client";

import { revalidateTag } from "next/cache";

export default async function updateAction(id, flow, name, title) {
  console.log("flow", flow);
  const body = {
    name: name,
    title: title,
    flow: flow,
  };
  try {
    const res = await fetch(
      `https://mindmapdb.onrender.com/api/v1/mindmap/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );
    if (res.status === 200) {
      revalidateTag("mindmaps");
      return true;
    }
  } catch (error) {
    return false;
  }
}
