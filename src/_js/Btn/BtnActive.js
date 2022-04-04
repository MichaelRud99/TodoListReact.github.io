import React from "react";
import BtnChoose from "./BtnChoose";


const BtnActive = () => {
    BtnChoose(1, 0, 2);
    localStorage.setItem("btnActive", 1);
    localStorage.removeItem("btnCompleted");
}
export default BtnActive