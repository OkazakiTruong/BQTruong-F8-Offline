"use client";
export default async function updateAction(id, flow) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:8080/api/v1/mindmap/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: !flow ? [] : JSON.stringify(flow),
      cache: "no-store",
    });
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
}
