import React from "react";
import "./PatternList.js";
import PatternList from "./PatternList.js";

const OutPatternList = ({todoList,filetrCheckFalse,filetrCheckTrue}) => {

    const indexTodo = todoList.map(todoList => todoList.todo);
    const btnCompleted = localStorage.getItem("btnCompleted");
    const btnActive = localStorage.getItem("btnActive");

    return (

        <ul id="list" className="list" >

            {(btnCompleted === null && btnActive === null) &&
                indexTodo.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value} todoList={todoList} 
                            filetrCheckFalse={filetrCheckFalse} filetrCheckTrue={filetrCheckTrue}/>)
                })
            }

            {btnCompleted != null &&
                filetrCheckTrue.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} todoList={todoList}  
                            filetrCheckFalse={filetrCheckFalse} filetrCheckTrue={filetrCheckTrue}/>)
                })
            }
            {btnActive != null &&
                filetrCheckFalse.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} todoList={todoList} 
                            filetrCheckFalse={filetrCheckFalse} filetrCheckTrue={filetrCheckTrue}/>)
                })
            }

        </ul>

    )
}

export default OutPatternList