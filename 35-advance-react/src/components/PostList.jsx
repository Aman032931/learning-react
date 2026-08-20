import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMessage from "./WelcomeMEssage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [ fetching, setFetching ] = useState(false);
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up seEffect");
      controller.abort();
    }  
  },[]);

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
