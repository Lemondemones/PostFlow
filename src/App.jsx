import { useEffect, useMemo, useState } from "react";
import React from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/usePosts";

import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setPostLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    const newPostsArray = posts.filter((p) => p.id !== post.id);
    setPosts(newPostsArray);
  };

  async function fetchPosts() {
    setPostLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setPostLoading(false);
  }

  const postModalHandler = () => {
    setModal(true);
  };

  const responseHandler = (event) => {
    fetchPosts();
  };

  return (
    <div>
      <hr className="m-[15px]" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostLoading ? (
        <h1>Loading</h1>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
      )}
      <MyButton onClick={postModalHandler}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <MyButton onClick={responseHandler}>get posts</MyButton>
    </div>
  );
}

export default App;
