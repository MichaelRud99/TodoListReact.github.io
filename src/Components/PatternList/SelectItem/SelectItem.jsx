import React from "react";
import readTodoList from "../../../utils/readTodoList";
import list from "../css/List.module.css";

const SelectItem = ({
   index,
   todoList,
   updateTodoList,
   filetrCheckFalse,
   filetrCheckTrue,
   all,
   active,
}) => {
   let selectItemList;

   if (all === true) {
      selectItemList = todoList;
   }
   if (active === true) {
      selectItemList = filetrCheckFalse;
   }
   if (all === false && active === false) {
      selectItemList = filetrCheckTrue;
   }

   const selectItem = (event) => {
      for (let i = 0; selectItemList.length > i; i++) {
         if (selectItemList[i].id === todoList[i].id) {
            todoList[i].check = selectItemList[i].check;
            break;
         }
      }
      selectItemList[index].check = !selectItemList[index].check;
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

export default SelectItem;
