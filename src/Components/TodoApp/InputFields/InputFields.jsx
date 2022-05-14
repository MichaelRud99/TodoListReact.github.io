import React from "react";
import todoApp from "../TodoApp.module.css";
import readTodoList from "../../../utils/readTodoList";
import { useSelector, useDispatch } from "react-redux";
import { enter, clear } from "../../../utils/redux/inputSlice";

const InputFields = ({ todoList, updateTodoList }) => {
   const input = useSelector((state) => state.input.value);
   const dispatch = useDispatch();

   const Change = (event) => {
      dispatch(enter(event.target.value));
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
            dispatch(clear());
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
