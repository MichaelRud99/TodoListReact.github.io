import React from "react";

const DestroyLi=(index,todoList)=>{

    todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));

}
export default DestroyLi

