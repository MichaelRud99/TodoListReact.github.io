import React from "react";
import patternTodoList from "../PatternList/patternTodoList";

const BtnClearCompleted = ({ todoList, updateTodoList }) => {

    const tmp = () => {
        const cloneTodList = todoList;
        const searchCheckDone = todoList.filter(todoList => todoList.check === true).length;

        if (searchCheckDone === todoList.length) {
            localStorage.removeItem("todo");
            updateTodoList(patternTodoList());
            return null;
        };

        cloneTodList.forEach((obj,) => {
            let indexCheck = todoList.findIndex(todoList => todoList.check === true);
            if (indexCheck === -1) return;
            todoList.splice(indexCheck, 1);
        })

        localStorage.setItem('todo', JSON.stringify(todoList));
        updateTodoList(patternTodoList());
    }

    return (
        <input onClick={tmp} value="clear completed" type="button" className="todoapp__btn todoapp__btn_clear-completed" />
    );
}

export default BtnClearCompleted;
