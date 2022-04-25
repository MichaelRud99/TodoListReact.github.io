import React from "react";
import { readTodoList } from "../../utils";
import list from "./css/List.module.css";

const SelectItem = ({ index, todoList, updateTodoList }) => {
   const selectItem = () => {
      todoList[index].check = !todoList[index].check;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   return (
      <input
         onClick={selectItem}
         type="checkbox"
         className={list.li_checkbox}
      />
   );
};

export { SelectItem };
