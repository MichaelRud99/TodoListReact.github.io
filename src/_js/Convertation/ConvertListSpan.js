
const convertListSpan = () => {
    let span = document.querySelectorAll("span");
    span = Array.prototype.slice.call(span);
    return span;
  }
  export default convertListSpan