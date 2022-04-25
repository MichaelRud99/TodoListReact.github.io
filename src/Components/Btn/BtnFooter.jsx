import React, { useEffect } from "react";
import todoApp from "../TodoApp/TodoApp.module.css";

const BtnFooter = ({ all, active, updateAll, updateActive }) => {
   const clickAll = () => {
      updateAll(true);
      updateActive(false);
   };
   const clickActive = () => {
      updateAll(false);
      updateActive(true);
   };
   const clickCompleted = () => {
      updateAll(false);
      updateActive(false);
   };

   return (
      <>
         {all === true && (
            <div className={todoApp.footer__btn}>
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_mod +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
            </div>
         )}

         {active === true && (
            <div className={todoApp.footer__btn}>
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_mod +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
            </div>
         )}

         {all === false && active === false && (
            <div className={todoApp.footer__btn}>
               <input
                  onClick={clickAll}
                  value="All"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickActive}
                  value="Active"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_hover +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
               <input
                  onClick={clickCompleted}
                  value="Completed"
                  type="button"
                  className={
                     todoApp.btn +
                     " " +
                     todoApp.btn_mod +
                     " " +
                     todoApp.transitionBackBorder
                  }
               />
            </div>
         )}
      </>
   );
};

export { BtnFooter };
