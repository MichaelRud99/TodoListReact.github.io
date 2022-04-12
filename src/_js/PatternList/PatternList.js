import "./PatternList.css";
import "./ListMod.css";
import React from "react";
import SelectItem from "../SelectItem";
import DestroyLi from "../DestroyLi";

class PatternList extends React.Component {
  constructor(props, event) {
    super(props);
    this.handleTodoListEdit = this.handleTodoListEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleTodoListEdit() {
    const todoList = this.props.state.todoList;
    todoList[this.props.index].edit = true;
    localStorage.setItem('todo', JSON.stringify(todoList));
    this.props.onEditValue(todoList[this.props.index].todo);
    this.props.onUpdateTodoList();
  }

  handleEdit(event) {
    this.props.onEditValue(event.target.value);
  }

  handleEditSubmit(event) {
    event.preventDefault();
    let input = this.props.state.iseditvalue;
    this.props.state.todoList[this.props.index].todo = input;
    this.props.state.todoList[this.props.index].edit = false;
    localStorage.setItem('todo', JSON.stringify(this.props.state.todoList));
    this.props.onUpdateTodoList();
  }

  handleBlur(event) {
    this.handleEditSubmit(event);
  }

  handleKeyUp(event) {
    if (event.code === "Enter" || event.code === "Escape") {
      this.handleEditSubmit(event);
    }
  }

  render() {

    return (
      <li className="list__li" id={this.props.index} >

        {this.props.state.todoList[this.props.index].edit === false ?

          < div className="flex" >
            <SelectItem index={this.props.index} state={this.props.state} onUpdateTodoList={this.props.onUpdateTodoList} />

            {(this.props.state.isall === true && this.props.state.todoList[this.props.index].check === true) &&
              <>
                <span className="list__li_btn list__span_mod transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label list__label_mod transition-color">{this.props.out}</label>
              </>
            }

            {(this.props.state.isall === true && this.props.state.todoList[this.props.index].check === false) &&
              <>
                <span className="list__li_btn transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label transition-color">{this.props.out}</label>
              </>
            }

            {this.props.state.isactive === true &&
              <>
                <span className="list__li_btn transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label transition-color">{this.props.out}</label>
              </>
            }

            {this.props.state.iscompleted === true &&
              <>
                <span className="list__li_btn list__span_mod transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label list__label_mod transition-color">{this.props.out}</label>
              </>
            }

            <div className="list__div_destroy transition-position">x</div>
            <DestroyLi index={this.props.index} state={this.props.state} onUpdateTodoList={this.props.onUpdateTodoList} />
          </div>

          : <input type="text" autoFocus onChange={this.handleEdit} onKeyDownCapture={this.handleKeyUp}
            onBlurCapture={this.handleBlur} value={this.props.state.iseditvalue} className="edit" />
        }

      </li >
    );
  }
}

export default PatternList