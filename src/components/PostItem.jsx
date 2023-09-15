import React from "react";
import MyButton from "./UI/button/MyButton";

function PostItem(props) {
  const { id, title, description } = props.post;

  const removeHandler = () => {
    props.remove(props.post);
  };

  return (
    <div className="w-[800px]">
      <div className="justify-between flex items-center p-4 m-4 rounded-lg border-[2px] border-solid border-teal-400">
        <div>
          <strong>
            {props.number}. {title}
          </strong>
          <div>{description}</div>
        </div>
        <div>
          <MyButton onClick={removeHandler}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
