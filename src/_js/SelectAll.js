import React from "react";
import PropTypes from "prop-types";

const SelectAll = (todoList) => {
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

SelectAll.propTypes={
  todoList:PropTypes.arrayOf(PropTypes.object).isRequired
  }

export default SelectAll
