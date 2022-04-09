import React from "react";
import "./TodoApp.css";
import SelectAll from "../../_js/SelectAll.js";
import BtnActive from "../../_js/Btn/BtnActive";
import InputFields from "../../_js/InputFields.js";
import BtnClerCompleted from "../../_js/Btn/BtnClearCompleted";
import OutPatternList from "../../_js/PatternList/OutPatternList.js";
import BtnAll from "../../_js/Btn/BtnAll";
import BtnCompleted from "../../_js/Btn/BtnCompleted";
import PropTypes from "prop-types";

const TodoApp = (props) => {

    const searchCheckDone = (props.todoList.filter(todoList => todoList.check === true).length);
    return (
        <div>
            <div className="todoapp">
                <div className="flex todoapp__frame">
                    {props.todoList.length > 0 &&
                        <input onClick={() => SelectAll(props.todoList)} type="checkbox" className="todoapp__select-all" />
                    }
                    <InputFields />
                </div>
                <OutPatternList todoList={props.todoList} filetrCheckFalse={props.filetrCheckFalse} filetrCheckTrue={props.filetrCheckTrue} />
                {(props.todoList).length > 0 &&
                    <footer className="flex todoapp__footer">
                        <strong className="strong" value="0" data-counter>{(props.todoList.filter(todoList => todoList.check === false)).length} item left  </strong>
                        <div  className="footer__btn">
                            <input onClick={() => BtnAll()} value="All" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                            <input onClick={() => BtnActive()} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                            <input onClick={() => BtnCompleted()} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                        </div>
                        <div>
                            {searchCheckDone > 0 &&
                            <input onClick={() => BtnClerCompleted(props.todoList,props.searchCheckDone)} value="clear completed" type="button" className="todoapp__btn todoapp__btn_clear-completed" />
                            }
                        </div>
                    </footer>
                }

            </div>

        </div>

    );

}

TodoApp.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    filetrCheckFalse: PropTypes.arrayOf(PropTypes.object).isRequired,
    filetrCheckTrue: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoApp

