
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
    this.handleBlur=this.handleBlur.bind(this);
    this.handleKeyUp =  this.handleKeyUp.bind(this);
    this.state = { isedit: false, value: this.props.out }
  }

  handleStateTrue = () => {
    this.setState({ isedit: true });
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.todoList[this.props.index].todo = this.state.value
    localStorage.setItem('todo', JSON.stringify(this.props.todoList));
    this.setState({ isedit: false });
  }

  handleBlur(event){
    this.handleSubmit(event);
  }

  handleKeyUp(event){
    if(event.code ==="Enter" || event.code ==="Escape"){
      this.handleSubmit(event);
    }
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
          : <input type="text" autoFocus onChange={this.handleEdit} onKeyDownCapture={this.handleKeyUp} onBlurCapture={this.handleBlur} value={this.state.value} className="edit" />
        }

      </li >
    )
  }
}

export default PatternList

