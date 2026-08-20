import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMEssage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}
