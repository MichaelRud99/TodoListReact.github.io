import React, { useState, useEffect } from "react";
import todoApp from "../TodoApp.module.css";
import readTodoList from "../../../utils";
import OutPatternList from "../../PatternList/OutPatternList";
import InputFields from "../InputFields";
import BtnClearCompleted from "../../Btn/BtnClearCompleted";
import BtnFooter from "../../Btn/BtnFooter";
import BtnSelectAll from "../../Btn/BtnSelectAll";

const TodoApp = () => {
   const [todoList, setTodoList] = useState(() => {
      return readTodoList();
   });
   const [all, setAll] = useState(true);
   const [active, setActive] = useState(false);

   return (
      <div>
         <div className={todoApp.todoapp}>
            <div className={todoApp.frame + " " + todoApp.flex}>
               {todoList.length > 0 && (
                  <BtnSelectAll
                     todoList={todoList}
                     updateTodoList={setTodoList}
                  />
               )}

               <InputFields todoList={todoList} updateTodoList={setTodoList} />
            </div>

            <OutPatternList
               todoList={todoList}
               updateTodoList={setTodoList}
               all={all}
               active={active}
            />
            {todoList.length > 0 && (
               <footer className={todoApp.flex}>
                  <strong className={todoApp.strong} value="0" data-counter>
                     {
                        todoList.filter((todoList) => todoList.check === false)
                           .length
                     }
                     item left
                  </strong>
                  <BtnFooter
                     all={all}
                     updateAll={setAll}
                     active={active}
                     updateActive={setActive}
                  />

                  {todoList.filter((todoList) => todoList.check === true)
                     .length > 0 && (
                     <BtnClearCompleted
                        todoList={todoList}
                        updateTodoList={setTodoList}
                     />
                  )}
               </footer>
            )}
         </div>
      </div>
   );
};
export default TodoApp;
