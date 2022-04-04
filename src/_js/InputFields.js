import React from "react";
import PatternTodoList from "../_js/PatternList/PatternTodoList";

class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event, props) {
    event.preventDefault();
    let input = this.state.value;
    let todoList = PatternTodoList("todo");
    const re = /[\s]{1}[\s]*$/;
    let valid = re.test(input);

    if (input) {
      if (valid === false) {
        let tmp = {};
        tmp.todo = input;
        tmp.check = false;
        todoList[todoList.length] = tmp;
        localStorage.setItem('todo', JSON.stringify(todoList));
        this.setState({ value: "" });
      }
    }
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit} className="todoapp__formInput">
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="What needs to be done?" className="todoapp__new-todo" />
          </form>
    );
  }

}

export default NameForm



