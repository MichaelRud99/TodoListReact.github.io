import React, { useState } from "react";
import readTodoList from "../../../utils/readTodoList";
import SelectItem from "../SelectItem";
import DestroyLi from "../DestroyLi";
import todoApp from "../../TodoApp/TodoApp.module.css";
import listMod from "../css/ListMod.module.css";
import list from "../css/List.module.css";

const PatternList = ({
   todoList,
   index,
   out,
   all,
   active,
   updateTodoList,
   filetrCheckFalse,
   filetrCheckTrue,
}) => {
   let [input, setInput] = useState(out);

   const todoListEdit = () => {
      todoList[index].edit = true;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(() => readTodoList());
   };

   const edit = (event) => {
      setInput(event.target.value);
   };

   const editSubmit = (event) => {
      event.preventDefault();
      todoList[index].todo = input;
      todoList[index].edit = false;
      localStorage.setItem("todo", JSON.stringify(todoList));
      updateTodoList(readTodoList());
   };

   const blur = (event) => {
      editSubmit(event);
   };

   const keyUp = (event) => {
      if (event.code === "Enter" || event.code === "Escape") {
         editSubmit(event);
      }
   };

   return (
      <li className={list.li}>
         {todoList[index].edit === false ? (
            <div className={todoApp.flex}>
               <SelectItem
                  todoList={todoList}
                  index={index}
                  updateTodoList={updateTodoList}
                  filetrCheckFalse={filetrCheckFalse}
                  filetrCheckTrue={filetrCheckTrue}
                  all={all}
                  active={active}
               />

               {all === true && todoList[index].check === true && (
                  <>
                     <span
                        className={
                           list.li_btn +
                           " " +
                           listMod.span +
                           " " +
                           list.transitionPosition
                        }
                     ></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className={
                           list.label +
                           " " +
                           listMod.label +
                           " " +
                           list.transitionColor
                        }
                     >
                        {out}
                     </label>
                  </>
               )}
               {all === true && todoList[index].check === false && (
                  <>
                     <span
                        className={list.li_btn + " " + list.transitionPosition}
                     ></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className={list.label + " " + list.transitionColor}
                     >
                        {out}
                     </label>
                  </>
               )}

               {active === true && (
                  <>
                     <span
                        className={list.li_btn + " " + list.transitionPosition}
                     ></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className={list.label + " " + list.transitionColor}
                     >
                        {out}
                     </label>
                  </>
               )}

               {all === false && active === false && (
                  <>
                     <span
                        className={
                           list.li_btn +
                           " " +
                           listMod.span +
                           " " +
                           list.transitionPosition
                        }
                     ></span>
                     <label
                        onDoubleClick={todoListEdit}
                        className={
                           list.label +
                           " " +
                           listMod.label +
                           " " +
                           list.transitionColor
                        }
                     >
                        {out}
                     </label>
                  </>
               )}

               <div
                  className={list.div_destroy + " " + list.transitionPosition}
               >
                  x
               </div>
               <DestroyLi
                  todoList={todoList}
                  index={index}
                  updateTodoList={updateTodoList}
               />
            </div>
         ) : (
            <input
               type="text"
               autoFocus
               className={list.edit}
               value={input}
               onChange={edit}
               onKeyDownCapture={keyUp}
               onBlurCapture={blur}
            />
         )}
      </li>
   );
};

export default PatternList;
