import React from "react";
import PropTypes from "prop-types";

const SelectAll = (props) => {

  let todoList = props.todoList;

  const selectAll = () => {
    let c = 0;
    c = (todoList.filter(todoList => todoList.check === true)).length;
    if (c === todoList.length) {
      todoList.forEach((value, c) => {
        todoList[c].check = false;
      })
    }
    else {
      todoList.forEach((value, c) => {
        todoList[c].check = true;
      })

    }
    c = 0;
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  return (
    <input id="btnSelectAll" type="checkbox" className="todoapp__select-all" onClick={selectAll} />
  );
}

SelectAll.propTypes={
  todoList:PropTypes.arrayOf(PropTypes.object).isRequired
  }

export default SelectAll
