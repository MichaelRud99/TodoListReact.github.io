import React from "react";

const BtnChoose=(a,b,c)=>{

    const footer= document.querySelector("footer");
    const btn = footer.querySelectorAll("input");

    btn[a].classList.add("todoapp__btn_mod");
    btn[b].classList.remove("todoapp__btn_mod");
    btn[c].classList.remove("todoapp__btn_mod");
  
    btn[a].classList.remove("todoapp__btn_hover");
    btn[b].classList.add("todoapp__btn_hover");
    btn[c].classList.add("todoapp__btn_hover");

}
export default BtnChoose