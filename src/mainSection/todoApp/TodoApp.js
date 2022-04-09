import React from "react";
import "./TodoApp.css";
import SelectAll from "../../_js/SelectAll.js";
import BtnActive from "../../_js/Btn/BtnActive";
import InputFields from "../../_js/InputFields.js";
import BtnClerCompleted from "../../_js/Btn/BtnClearCompleted";
import OutPatternList from "../../_js/PatternList/OutPatternList.js";
import BtnAll from "../../_js/Btn/BtnAll";
import BtnCompleted from "../../_js/Btn/BtnCompleted";
import FooterBtn from "../../_js/Btn/FooterBtn";
import PropTypes from "prop-types";

const TodoApp =  ({ todoList, filetrCheckTrue, filetrCheckFalse})  => {

    const searchCheckDone = (todoList.filter(todoList => todoList.check === true).length);
    return (
        <div>
            <div className="todoapp">
                <div className="flex todoapp__frame">
                    {todoList.length > 0 &&
                        <input onClick={() => SelectAll(todoList)} type="checkbox" className="todoapp__select-all" />
                    }
                    <InputFields />
                </div>
                <OutPatternList todoList={todoList} filetrCheckFalse={filetrCheckFalse} filetrCheckTrue={filetrCheckTrue} />
                {(todoList).length > 0 &&
                    <footer className="flex todoapp__footer">
                        <strong className="strong" value="0" data-counter>{(todoList.filter(todoList => todoList.check === false)).length} item left  </strong>

                        <FooterBtn/>

                        <div>
                            {searchCheckDone > 0 &&
                            <input onClick={() => BtnClerCompleted(todoList,searchCheckDone)} value="clear completed" type="button" className="todoapp__btn todoapp__btn_clear-completed" />
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

