import React from "react";
import PatternTodoList from "./PatternList/patternTodoList";

class NameForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.props.onChangeValue(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = this.props.state;
    let todoList = PatternTodoList("todo");
    const re = /[\s]{1}[\s]*$/;
    let valid = re.test(input);

    if (input) {
      if (valid === false) {
        let tmp = {};
        tmp.todo = input;
        tmp.check = false;
        tmp.edit = false;
        todoList[todoList.length] = tmp;
        localStorage.setItem('todo', JSON.stringify(todoList));
        this.props.onSubmit();
        this.props.onUpdateTodoList();
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todoapp__formInput">
        <input type="text" value={this.props.state} onChange={this.handleChange} placeholder="What needs to be done?" className="todoapp__new-todo" />
      </form>
    );
  }

}

export default NameForm



