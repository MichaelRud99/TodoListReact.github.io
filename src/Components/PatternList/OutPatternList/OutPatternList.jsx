import React, { useState, useEffect } from "react";
import PatternList from "../PatternList";
import list from "../css/List.module.css";
import { useSelector } from "react-redux";

const OutPatternList = ({ todoList, updateTodoList }) => {
   const filetrCheckTrue = todoList.filter(
      (todoList) => todoList.check === true
   );
   const filetrCheckFalse = todoList.filter(
      (todoList) => todoList.check === false
   );

   /*    console.log(filetrCheckFalse); */

   const all = useSelector((state) => state.boolean.all);
   const active = useSelector((state) => state.boolean.active);

   return (
      <ul id="list" className={list.list}>
         {all === true &&
            todoList.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                  />
               );
            })}

         {active === true &&
            filetrCheckFalse.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                     filetrCheckFalse={filetrCheckFalse}
                  />
               );
            })}
         {all === false &&
            active === false &&
            filetrCheckTrue.map((value, index) => {
               return (
                  <PatternList
                     key={value.id}
                     index={index}
                     out={value.todo}
                     todoList={todoList}
                     all={all}
                     active={active}
                     updateTodoList={updateTodoList}
                     filetrCheckTrue={filetrCheckTrue}
                  />
               );
            })}
      </ul>
   );
};

export default OutPatternList;
