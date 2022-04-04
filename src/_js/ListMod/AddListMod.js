import React from "react";
import convertListLabel from "../Convertation/ConvertListLabel";
import convertListSpan from "../Convertation/ConvertListSpan";
import "./ListMod.css";

const addListMod = (i) => {
    const label = convertListLabel();
    const span = convertListSpan();

    if (label[i] != undefined && span[i] != undefined) {
      label[i].classList.add("list__label_mod");
      span[i].classList.add("list__span_mod");
    }
  }
export default addListMod

