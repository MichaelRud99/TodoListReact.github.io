import React from "react";

import BtnChoose from "./BtnChoose";

const BtnAll = () => {

    BtnChoose(0, 1, 2);
    localStorage.removeItem("btnActive");
    localStorage.removeItem("btnCompleted");

}
export default BtnAll