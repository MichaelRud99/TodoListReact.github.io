import React from "react";
import todoApp from "../../TodoApp/TodoApp.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
   passAll,
   passActive,
   passCompleted,
} from "../../../utils/redux/booleanSlice";

const BtnFooter = () => {
   const all = useSelector((state) => state.boolean.all);
   const active = useSelector((state) => state.boolean.active);
   const dispatch = useDispatch();

   return (
      <>
         {all === true && (
            <div className={todoApp.footer__btn}>
               <input
                  onClick={() => dispatch(passAll())}
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
                  onClick={() => dispatch(passActive())}
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
                  onClick={() => dispatch(passCompleted())}
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
                  onClick={() => dispatch(passAll())}
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
                  onClick={() => dispatch(passActive())}
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
                  onClick={() => dispatch(passCompleted())}
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
                  onClick={() => dispatch(passAll())}
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
                  onClick={() => dispatch(passActive())}
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
                  onClick={() => dispatch(passCompleted())}
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

export default BtnFooter;
