import React from "react";

class DestroyLi extends React.Component {
    constructor(props) {
        super(props);
        this.destroyLi = this.destroyLi.bind(this);
    }

    destroyLi() {
        const todoList = this.props.state.todoList;
        todoList.splice(this.props.index, 1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        this.props.onUpdateTodoList();
    }

    render() {
        return (
            <input type="checkbox" onClick={this.destroyLi} className="list__destroy"></input>
        );
    }

}
export default DestroyLi