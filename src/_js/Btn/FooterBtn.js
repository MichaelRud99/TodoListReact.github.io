import React from "react";

class FooterBtn extends React.Component {
    constructor(props, event) {
        super(props);
        this.handleBtnAll = this.handleBtnAll.bind(this);
        this.handleBtnActive = this.handleBtnActive.bind(this);
        this.handleBtnCompleted = this.handleBtnCompleted.bind(this);
        this.state = {isall: true, isactive: false, iscompleted: false }
    }
    handleBtnAll = () => {
        this.setState({isall: true, isactive: false, iscompleted: false });
        console.log(this.state);
    }

    handleBtnActive = () => {
        this.setState({isall: false, isactive: true, iscompleted: false });
        console.log(this.state);
    }

    handleBtnCompleted = () => {
        this.setState({isall: false, isactive: false, iscompleted: true });
        console.log(this.state);
    }

    render() {
        return (
            <>
                {this.state.isall === true &&
                    <div className="footer__btn">
                        <input onClick={this.handleBtnAll} value="All" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                        <input onClick={this.handleBtnActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                        <input onClick={this.handleBtnCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    </div>
                }

                {this.state.isactive === true &&
                    <div className="footer__btn">
                        <input onClick={this.handleBtnAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                        <input onClick={this.handleBtnActive} value="Active" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                        <input onClick={this.handleBtnCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                    </div>
                }

                {this.state.iscompleted === true &&
                    <div className="footer__btn">
                        <input onClick={this.handleBtnAll} value="All" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                        <input onClick={this.handleBtnActive} value="Active" type="button" className="todoapp__btn todoapp__btn_hover transition-back-border" />
                        <input onClick={this.handleBtnCompleted} value="Completed" type="button" className="todoapp__btn todoapp__btn_mod transition-back-border" />
                    </div>
                }

            </>
        )
    }
}


export default FooterBtn

