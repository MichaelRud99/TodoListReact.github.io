import React from "react";
import "./TodoApp.css";
import SelectAll from "../../_js/SelectAll.js";
import BtnFooter from "../../_js/Btn/BtnFooter";
import InputFields from "../../_js/InputFields.js";
import BtnClearCompleted from "../../_js/Btn/BtnClearCompleted";
import patternTodoList from "../../_js/PatternList/patternTodoList";
import OutPatternList from "../../_js/PatternList/OutPatternList.js";

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeActive = this.handleChangeActive.bind(this);
        this.handleChangeCompleted = this.handleChangeCompleted.bind(this);
        this.handleStateTrue = this.handleStateTrue.bind(this);
        this.handleChang = this.handleChang.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateTodoList = this.handleUpdateTodoList.bind(this);

        this.state = {
            isall: true, isactive: false, iscompleted: false,
            isvalue: "", iseditvalue: "",
            todoList: patternTodoList("todo")
        }
    }

    handleChangeAll = () => {
        this.setState({ isall: true, isactive: false, iscompleted: false });
    }

    handleChangeActive() {
        this.setState({ isall: false, isactive: true, iscompleted: false });
    }

    handleChangeCompleted = () => {
        this.setState({ isall: false, isactive: false, iscompleted: true });
    }

    handleStateTrue = () => {
        this.setState({ isedit: true });
    }

    handleChang = (value) => {
        this.setState({ isvalue: value });
    }

    handleEdit = (value) => {
        this.setState({ iseditvalue: value });
    }

    handleSubmit = () => {
        this.setState({ isvalue: ""});
    }

    handleUpdateTodoList = () => {
        this.setState({todoList: patternTodoList("todo") });
    }

    render() {
        return (

            <div>
                <div className="todoapp">
                    <div className="flex todoapp__frame">

                        {this.state.todoList.length > 0 &&
                            <SelectAll todoList={this.state.todoList} onUpdateTodoList={this.handleUpdateTodoList} />}

                        <InputFields value={this.state.isvalue} todoList={this.state.todoList} onChangeValue={this.handleChang} onSubmit={this.handleSubmit} onUpdateTodoList={this.handleUpdateTodoList}/>
                    </div>

                    <OutPatternList state={this.state} onUpdateTodoList={this.handleUpdateTodoList} onStateTrue={this.handleStateTrue} onEditValue={this.handleEdit} />

                    {this.state.todoList.length > 0 &&
                        <footer className="flex todoapp__footer">

                            <strong className="strong" value="0" data-counter>{(this.state.todoList.filter(todoList => todoList.check === false)).length} item left  </strong>
                            <BtnFooter state={this.state} onChangeAll={this.handleChangeAll} onChangeActive={this.handleChangeActive} onChangeCompleted={this.handleChangeCompleted} />

                            {this.state.todoList.filter(todoList => todoList.check === true).length > 0 &&
                                <BtnClearCompleted state={this.state} onSubmit={this.handleUpdateTodoList} />}
                        </footer>
                    }
                </div>
            </div>

        );
    }
}

export default TodoApp