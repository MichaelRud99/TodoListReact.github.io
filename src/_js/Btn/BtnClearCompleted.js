import React from "react";

const BtnClerCompleted = (props) => {
    const cloneTodList = JSON.parse(localStorage.getItem("todo"));
    if (props.searchCheckDone === props.todoList.length) { localStorage.removeItem("todo"); }
    cloneTodList.forEach((obj, c) => {
        let indexCheck = props.todoList.findIndex(todoList => todoList.check === true);
        if (indexCheck === -1) return;
        props.todoList.splice(indexCheck, 1);
    })
    localStorage.setItem('todo', JSON.stringify(props.todoList));
}

export default BtnClerCompleted