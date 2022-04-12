import React from "react";

class BtnClearCompleted extends React.Component {
    constructor(props) {
        super(props);
        this.btnClearCompleted = this.btnClearCompleted.bind(this);
    }

    btnClearCompleted() {
        const todoList = this.props.state.todoList;
        const cloneTodList = todoList;
        const searchCheckDone = todoList.filter(todoList => todoList.check === true).length;

        if (searchCheckDone === todoList.length) {
            localStorage.removeItem("todo");
            this.props.onSubmit();
            return;

        };

        cloneTodList.forEach((obj, c) => {
            let indexCheck = todoList.findIndex(todoList => todoList.check === true);
            if (indexCheck === -1) return;
            todoList.splice(indexCheck, 1);
        })

        localStorage.setItem('todo', JSON.stringify(todoList));
        this.props.onSubmit();
    }

    render() {
        return (
            <input onClick={this.btnClearCompleted} value="clear completed" type="button" className="todoapp__btn todoapp__btn_clear-completed" />
        );
    }
}

export default BtnClearCompleted