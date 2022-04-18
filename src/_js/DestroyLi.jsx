import React from "react";
import patternTodoList from "./PatternList/patternTodoList";

class DestroyLi extends React.Component {
    constructor(props) {
        super(props);
        this.destroyLi = this.destroyLi.bind(this);
    }

    destroyLi({ todoList, index, updateTodoList } = this.props) {
        todoList.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        updateTodoList(patternTodoList());
    }

    render() {
        return (
            <input type="checkbox" onClick={() => this.destroyLi()} className="list__destroy"></input>
        );
    }
}
export default DestroyLi;
