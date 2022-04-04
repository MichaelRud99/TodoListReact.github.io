import react from "react";

const PatternTodoList = (todo) => {
    let todoList = [];
    if (JSON.parse(localStorage.getItem(todo)) != undefined) {
        todoList = JSON.parse(localStorage.getItem(todo));
    }
return todoList;
}
export default PatternTodoList