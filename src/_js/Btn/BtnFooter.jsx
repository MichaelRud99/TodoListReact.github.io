import React from "react";

const FooterBtn = ({ state, onChangeAll, onChangeActive, onChangeCompleted }) => {

    return (
        <>
            {state.isall === true &&
                <div className="footer__btn">
                    <input onClick={onChangeAll} value="All" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                    <input onClick={onChangeActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={onChangeCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                </div>
            }

            {state.isactive === true &&
                <div className="footer__btn">
                    <input onClick={onChangeAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={onChangeActive} value="Active" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                    <input onClick={onChangeCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                </div>
            }

            {state.iscompleted === true &&
                <div className="footer__btn">
                    <input onClick={onChangeAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={onChangeActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={onChangeCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                </div>
            }
        </>
    );

}

export default FooterBtn;
