import React from "react";
import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

function PostForm({ create }) {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const addNewPost = (event) => {
    // Так тоже можно создать объект и потом передать его в setPosts([,newPosts])
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   description,
    // };
    // setPosts([...posts, { ...post, id: Date.now() }]); // Раньше было в App, но теперь мы не можем передавать пропсы от ребенка к родителю
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" }); // обнуление inputa
  };

  const titleHandler = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const descriptionHandler = (event) => {
    setPost({ ...post, description: event.target.value });
  };
  return (
    <div className="">
      <form>
        <MyInput
          value={post.title}
          onChange={titleHandler}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.description}
          onChange={descriptionHandler}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
}

export default PostForm;
