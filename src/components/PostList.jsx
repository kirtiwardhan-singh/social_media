import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
      addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

// import { useContext } from "react";
// import Post from "./Post";
// import { PostList as PostListData } from "../store/PostListStore";

// const PostList = () => {
//   const { postList } = useContext(PostListData);
//   return (
//     <>
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </>
//   );
// };

// export default PostList;
