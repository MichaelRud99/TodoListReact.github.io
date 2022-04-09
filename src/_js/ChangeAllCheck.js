import React from "react";

const changeAllCheck = (todoList, bool1) => {

  todoList.forEach((value, c) => {
    todoList[c].check = bool1;
  })
  
  localStorage.setItem('todo', JSON.stringify(todoList));

}

export default changeAllCheck

