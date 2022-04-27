import React from "react";
import readTodoList from "../../../utils";
import todoApp from "../../TodoApp/TodoApp.module.css";

const BtnSelectAll = ({ todoList, updateTodoList }) => {
   const selectAll = () => {
      let c = 0;
      c = todoList.filter((todoList) => todoList.check === true).length;
      if (c === todoList.length) {
         todoList.forEach((value, c) => {
            todoList[c].check = false;
         });
      } else {
         todoList.forEach((value, c) => {
            todoList[c].check = true;
         });
      }
      c = 0;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   return (
      <input
         onClick={selectAll}
         type="checkbox"
         className={todoApp.selectAll}
      />
   );
};

export default BtnSelectAll;
