
import "./PatternList.css";
import React from "react";
import SelectItem from "../SelectItem";
import DestroyLi from "../DestroyLi";

class PatternList extends React.Component {
  constructor(props,event) {
    super(props)
    this.handleStateTrue = this.handleStateTrue.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { isedit: false, value: this.props.out }

  }

  handleStateTrue = (props) => {
    this.setState({ isedit: true });
  }

  handleEdit(event, props) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    const ul = document.querySelector("ul");
    const input = ul.querySelector(".edit");

    input.onblur = () => {
      this.handleSubmit(event);
    }
  };


  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.todoList[this.props.index].todo = this.state.value
    localStorage.setItem('todo', JSON.stringify(this.props.todoList));
    this.setState({ isedit: false });
  }

  render() {


    return (
      <li className="list__li" id={this.props.index} >
        {this.state.isedit === false ?
          < div className="flex" >
            <input onClick={() => SelectItem(this.props.index, this.props.filetrCheckFalse, this.props.filetrCheckTrue)} type="checkbox" className="list__li_checkbox"></input>
            <span className="list__li_btn transition-position"></span>
            <label onDoubleClick={() => this.handleStateTrue()} className="list__label transition-color">{this.props.out}</label>
            <div className="list__div_destroy transition-position">x</div>
            <input type="checkbox" onChange={() => DestroyLi(this.props.index, this.props.todoList)} className="list__destroy"></input>
          </div>
          : <input type="text" autoFocus onChange={this.handleEdit} value={this.state.value} className="edit" />
        }


      </li >
    )
  }
}

export default PatternList

