import "./PatternList.css";
import "./ListMod.css";
import React from "react";
import SelectItem from "../SelectItem";
import DestroyLi from "../DestroyLi";

class PatternList extends React.Component {
  constructor(props) {
    super(props);
    this.handleTodoListEdit = this.handleTodoListEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleTodoListEdit({ index, onUpdateTodoList } = this.props, { todoList } = this.props.state) {
    todoList[index].edit = true;
    localStorage.setItem('todo', JSON.stringify(todoList));
    onUpdateTodoList();
  }

  handleEdit(event, { onEditValue } = this.props) {
    onEditValue(event.target.value);
  }

  handleEditSubmit(event, { index, onUpdateTodoList } = this.props, { todoList, iseditvalue } = this.props.state) {
    event.preventDefault();
    todoList[index].todo = iseditvalue;
    todoList[index].edit = false;
    localStorage.setItem('todo', JSON.stringify(todoList));
    onUpdateTodoList();
  }

  handleBlur(event) {
    this.handleEditSubmit(event);
  }

  handleKeyUp(event) {
    if (event.code === "Enter" || event.code === "Escape") {
      this.handleEditSubmit(event);
    }
  }

  render({ todoList, isall, isactive, iscompleted, iseditvalue } = this.props.state, { index, out,onUpdateTodoList } = this.props) {

    return (
      <li className="list__li" id={index} >

        {todoList[index].edit === false ?

          < div className="flex" >
            <SelectItem index={index} todoList={todoList} onUpdateTodoList={onUpdateTodoList} />

            {(isall === true && todoList[index].check === true) &&
              <>
                <span className="list__li_btn list__span_mod transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label list__label_mod transition-color">{out}</label>
              </>
            }

            {(isall === true && todoList[index].check === false) &&
              <>
                <span className="list__li_btn transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label transition-color">{out}</label>
              </>
            }

            {isactive === true &&
              <>
                <span className="list__li_btn transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label transition-color">{out}</label>
              </>
            }

            {iscompleted === true &&
              <>
                <span className="list__li_btn list__span_mod transition-position"></span>
                <label onDoubleClick={this.handleTodoListEdit} className="list__label list__label_mod transition-color">{out}</label>
              </>
            }

            <div className="list__div_destroy transition-position">x</div>
            <DestroyLi index={index} todoList={todoList} onUpdateTodoList={onUpdateTodoList} />
          </div>

          : <input type="text" autoFocus onChange={this.handleEdit} onKeyDownCapture={this.handleKeyUp}
            onBlurCapture={this.handleBlur} value={iseditvalue} className="edit" />
        }

      </li >
    );
  }
}

export default PatternList;
