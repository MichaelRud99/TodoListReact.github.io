import React from "react";
import "./PatternList.js";
import PatternList from "./PatternList.js";
import PatternTodoList from "./patternTodoList.js";

const OutPatternList = ({ state, onUpdateTodoList, onStateTrue, onEditValue }) => {

    const todoList = PatternTodoList("todo");
    const indexTodo = todoList.map(todoList => todoList.todo);
    const filetrCheckTrue = todoList.filter(todoList => todoList.check === true);
    const filetrCheckFalse = todoList.filter(todoList => todoList.check === false);

    return (

        <ul id="list" className="list" >

            {state.isall === true &&
                indexTodo.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value}
                        state={state} onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }
            {state.isactive === true &&
                filetrCheckFalse.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} state={state}
                        onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }
            {state.iscompleted === true &&
                filetrCheckTrue.map((value, count) => {
                    return (<PatternList key={count} index={count} out={value.todo} state={state}
                        onUpdateTodoList={onUpdateTodoList} onStateTrue={onStateTrue} onEditValue={onEditValue} />)
                })
            }

        </ul>

    )
}

export default OutPatternList