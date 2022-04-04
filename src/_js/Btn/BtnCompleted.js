import React from "react";
import BtnChoose from "./BtnChoose";

const BtnCompleted=()=>{
    BtnChoose(2, 1, 0);
    localStorage.setItem("btnCompleted", 1);
    localStorage.removeItem("btnActive");
}
export default BtnCompleted