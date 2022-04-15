import react from "react";

const patternTodoList = (todo) => {
    let todoList = [];
    if (JSON.parse(localStorage.getItem(todo)) != undefined) {
        todoList = JSON.parse(localStorage.getItem(todo));
    }
    return todoList;
}
export default patternTodoList;
