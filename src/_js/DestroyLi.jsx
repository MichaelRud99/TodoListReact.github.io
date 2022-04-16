import React from "react";

class DestroyLi extends React.Component {
    constructor(props) {
        super(props);
        this.destroyLi = this.destroyLi.bind(this);
    }

    destroyLi({todoList,index,onUpdateTodoList}=this.props) {
        todoList.splice(index, 1);
        localStorage.setItem('todo', JSON.stringify(todoList));
        onUpdateTodoList();
    }

    render() {
        return (
            <input type="checkbox" onClick={()=>this.destroyLi()} className="list__destroy"></input>
        );
    }

}
export default DestroyLi;
