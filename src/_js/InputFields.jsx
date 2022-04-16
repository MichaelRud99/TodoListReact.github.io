import React from "react";

class NameForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.props.onChangeValue(event.target.value);
  }

  handleSubmit(event,{value,todoList,onSubmit,onUpdateTodoList}=this.props) {
    event.preventDefault();
    const re = /[\s]{1}[\s]*$/;
    let valid = re.test(value);

    if (value) {
      if (valid === false) {
        let tmp = {};
        tmp.todo = value;
        tmp.check = false;
        tmp.edit = false;
        todoList[todoList.length] = tmp;
        localStorage.setItem('todo', JSON.stringify(todoList));
        onSubmit();
        onUpdateTodoList();
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todoapp__formInput">
        <input type="text" value={this.props.value} onChange={this.handleChange} placeholder="What needs to be done?" className="todoapp__new-todo" />
      </form>
    );
  }

}

export default NameForm



