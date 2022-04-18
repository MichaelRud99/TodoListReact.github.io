import React from "react";

const FooterBtn = ({ all, active, updateAll, updateActive }) => {

    const updateCompleted = () => {
        updateAll(false);
        updateActive(false);
    }
    const cliskAll = () => {
        updateAll(true);
        updateActive(false);
    }

    const cliskActive = () => {
        updateAll(false);
        updateActive(true);
    }

    return (
        <>
            {all === true &&
                <div className="footer__btn">
                    <input onClick={cliskAll} value="All" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                    <input onClick={cliskActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={updateCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                </div>
            }

            {active === true &&
                <div className="footer__btn">
                    <input onClick={cliskAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={cliskActive} value="Active" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                    <input onClick={updateCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                </div>
            }

            {(all === false && active === false) &&
                <div className="footer__btn">
                    <input onClick={cliskAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={cliskActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    <input onClick={updateCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                </div>
            }
        </>
    );

}

export default FooterBtn;
