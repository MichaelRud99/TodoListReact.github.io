import React from "react";

const BtnClerCompleted = (todoList,searchCheckDone) => {
    const cloneTodList = JSON.parse(localStorage.getItem("todo"));
    if (searchCheckDone === todoList.length) { localStorage.removeItem("todo"); }
    cloneTodList.forEach((obj, c) => {
        let indexCheck = todoList.findIndex(todoList => todoList.check === true);
        if (indexCheck === -1) return;
        todoList.splice(indexCheck, 1);
    })
    localStorage.setItem('todo', JSON.stringify(todoList));
}

export default BtnClerCompleted