import React, {useState} from "react";
import "./TodoApp.css";
import SelectAll from "../../_js/SelectAll";
import BtnFooter from "../../_js/Btn/BtnFooter";
import InputFields from "../../_js/InputFields";
import BtnClearCompleted from "../../_js/Btn/BtnClearCompleted";
import patternTodoList from "../../_js/PatternList/patternTodoList";
import OutPatternList from "../../_js/PatternList/OutPatternList";

const TodoApp = () => {

    const [todoList, setTodoList] = useState(() => { return patternTodoList() });
    const [all, setAll] = useState(true);
    const [active, setActive] = useState(false);

    return (

        <div>
            <div className="todoapp">
                <div className="flex todoapp__frame">
                    {todoList.length > 0 &&
                        <SelectAll todoList={todoList} updateTodoList={setTodoList} />}

                    <InputFields todoList={todoList} updateTodoList={setTodoList} />
                </div>

                <OutPatternList todoList={todoList} updateTodoList={setTodoList} all={all} active={active} />

                {todoList.length > 0 &&
                    <footer className="flex todoapp__footer">

                        <strong className="strong" value="0" data-counter>{(todoList.filter(todoList => todoList.check === false)).length} item left  </strong>
                        <BtnFooter all={all} updateAll={setAll} active={active} updateActive={setActive} />

                        {todoList.filter(todoList => todoList.check === true).length > 0 &&
                            <BtnClearCompleted todoList={todoList} updateTodoList={setTodoList} />}
                    </footer>
                }
            </div>
        </div>

    );
}

export default TodoApp