import React from "react";
import { fetchPost } from "@/app/lib/data";

export default async function PostPage({ params }) {
  console.log(params);
  const post = await fetchPost(params.postId);
  console.log(post);
  return (
    <div className="flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-4">
        {post ? post.get("title") : "No Post Found"}
      </h1>
      {post && <p className="mb-4">{post.get("body")}</p>}
    </div>
  );
}
