import React from "react";
import convertListLabel from "../Convertation/ConvertListLabel";
import convertListSpan from "../Convertation/ConvertListSpan";

const removeListMod = (i) => {
    const label = convertListLabel();
    const span = convertListSpan();

    if (label[i] != undefined && span[i] != undefined) {
      label[i].classList.remove("list__label_mod");
      span[i].classList.remove("list__span_mod");
    }
  }

export default removeListMod