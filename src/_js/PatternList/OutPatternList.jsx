import React, { Component } from "react";
import "./PatternList";
import PatternList from "./PatternList";

const OutPatternList = ({ state, onUpdateTodoList, onStateTrue, onEditValue }) => {

    const todoList = state.todoList;
    const indexTodo = todoList.map(todoList => todoList.todo);
    const filetrCheckTrue = todoList.filter(todoList => todoList.check === true);
    const filetrCheckFalse = todoList.filter(todoList => todoList.check === false);

    return (

        <ul id="list" className="list" >

            {state.isall === true &&
                indexTodo.map((value, index) => {
                    return (<PatternList key={index} index={index} out={value}
                        state={state} onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }
            {state.isactive === true &&
                filetrCheckFalse.map((value, index) => {
                    return (<PatternList key={index} index={index} out={value.todo} state={state}
                        onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }
            {state.iscompleted === true &&
                filetrCheckTrue.map((value, index) => {
                    return (<PatternList key={index} index={index} out={value.todo} state={state}
                        onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }

        </ul>

    )
}

export default OutPatternList