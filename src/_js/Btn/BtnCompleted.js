import React from "react";
import BtnChoose from "./BtnChoose";

const BtnCompleted=(todoList)=>{
    BtnChoose(2, 1, 0);
    localStorage.setItem("btnCompleted", 1);
    localStorage.removeItem("btnActive");
    localStorage.setItem("countCompleted",JSON.stringify(todoList.length));
}
export default BtnCompleted