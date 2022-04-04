import React from "react";

const CloneStorage=(check,name,todoList)=>{

    let tmp = {};
    let completed = [];
    let c = 0;
  
    todoList.forEach((value) => {
      if (value.check === check) {
        tmp = todoList[c];
        completed[completed.length] = tmp;
        c++;
      }
      else { c++; }
    })
  
    localStorage.setItem(name, JSON.stringify(completed));

}
export default CloneStorage