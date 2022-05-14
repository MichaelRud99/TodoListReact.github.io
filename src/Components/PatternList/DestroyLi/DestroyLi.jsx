import React from "react";
import readTodoList from "../../../utils/readTodoList";
import list from "../css/List.module.css";

const DestroyLi = ({ todoList, index, updateTodoList }) => {
   const destroyLi = (event) => {
      todoList.splice(index, 1);
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   return (
      <input
         type="checkbox"
         onClick={destroyLi}
         className={list.destroy}
      ></input>
   );
};
export default DestroyLi;
