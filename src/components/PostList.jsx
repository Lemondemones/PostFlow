import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return (
      <h1 className="text-2xl flex justify-center font-medium">
        Постов не обнаружено
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-center text-xl font-bold p-2">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
