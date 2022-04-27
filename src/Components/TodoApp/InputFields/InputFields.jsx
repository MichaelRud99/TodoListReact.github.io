import React, { useState } from "react";
import todoApp from "../TodoApp.module.css";
import readTodoList from "../../../utils";

const InputFields = ({ todoList, updateTodoList }) => {
   let [input, setInput] = useState("");

   const Change = (event) => {
      setInput(event.target.value);
   };

   const Submit = (event) => {
      event.preventDefault();
      const re = /[\s]{1}[\s]*$/;
      let valid = re.test(input);

      if (input) {
         if (valid === false) {
            let tmp = {};
            tmp.todo = input;
            tmp.check = false;
            tmp.edit = false;
            tmp.id = Math.random();
            todoList[todoList.length] = tmp;
            localStorage.setItem("todo", JSON.stringify(todoList));
            setInput("");
            updateTodoList(() => readTodoList());
         }
      }
   };

   return (
      <form onSubmit={Submit} className={todoApp.formInput}>
         <input
            type="text"
            value={input}
            onChange={Change}
            placeholder="What needs to be done?"
            className={todoApp.newTodo}
         />
      </form>
   );
};
export default InputFields;
