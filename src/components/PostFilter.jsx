import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
  const searchPostHandle = (event) => {
    setFilter({ ...filter, query: event.target.value });
  };

  const sortPostHandler = (selecedSort) => {
    setFilter({ ...filter, sort: selecedSort });
  };

  return (
    <div>
      <MyInput
        placeholder="Поиск ... "
        value={filter.query}
        onChange={searchPostHandle}
      />
      <MySelect
        value={filter.sort}
        onChange={sortPostHandler}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
