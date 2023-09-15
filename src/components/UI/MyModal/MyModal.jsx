import React, { useState } from "react";
import cl from "./MyModal.module.css";

function MyModal({ children, visible, setVisible }) {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  const visibleHandle = () => {
    setVisible(false);
  };

  const propHandle = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={rootClasses.join(" ")} onClick={visibleHandle}>
      <div className={cl.myModalContent} onClick={propHandle}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
