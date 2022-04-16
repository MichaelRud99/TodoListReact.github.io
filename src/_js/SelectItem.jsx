import React from "react";

class SelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem({index,todoList,onUpdateTodoList}=this.props) {

    todoList[index].check = !todoList[this.props.index].check;
    localStorage.setItem('todo', JSON.stringify(todoList));
    onUpdateTodoList();
  }

  render() {
    return (
      <input onClick={()=>this.selectItem()} type="checkbox" className="list__li_checkbox" />
    );
  }
}

export default SelectItem;
