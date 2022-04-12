import React from "react";

class SelectAll extends React.Component{
  constructor(props){
    super(props);
    this.selectAll=this.selectAll.bind(this);

  }

  selectAll(){
    let c = 0;
    const todoList=this.props.state.todoList;
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
    this.props.onSubmit();
  }

  render(){
    return(
      <input onClick={this.selectAll} type="checkbox" className="todoapp__select-all" />
    )
  }
}

export default SelectAll