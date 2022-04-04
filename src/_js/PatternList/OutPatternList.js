import React from "react";
import "./PatternList.js";
import PatternList from "./PatternList.js";

const OutPatternList = (props, todoList) => {

    const indexTodo = props.todoList.map(todoList => todoList.todo);
    const btnCompleted = localStorage.getItem("btnCompleted");
    const btnActive = localStorage.getItem("btnActive");

    return (

        <ul id="list" className="list" >

            {(btnCompleted === null && btnActive === null) &&
                indexTodo.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value} todoList={props.todoList} 
                    filetrCheckFalse={props.filetrCheckFalse} filetrCheckTrue={props.filetrCheckTrue}/>)
                })
            }

            {btnCompleted != null &&
                props.filetrCheckTrue.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} todoList={props.todoList}  
                    filetrCheckFalse={props.filetrCheckFalse} filetrCheckTrue={props.filetrCheckTrue}/>)
                })
            }
            {btnActive != null &&
                props.filetrCheckFalse.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} todoList={props.todoList} 
                    filetrCheckFalse={props.filetrCheckFalse} filetrCheckTrue={props.filetrCheckTrue}/>)
                })
            }

        </ul>

    )
}

export default OutPatternList