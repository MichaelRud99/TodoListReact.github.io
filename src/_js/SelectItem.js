import PatternTodoList from "./PatternList/PatternTodoList";


const SelectItem = (index, filetrCheckFalse, filetrCheckTrue) => {
  const todoList = PatternTodoList("todo");

  if (localStorage.getItem("btnActive") !== null) {
    filetrCheckFalse[index].check = true;

    todoList.forEach((value, c) => {
      if (filetrCheckFalse[index].todo === todoList[c].todo) {
        todoList[c].check = filetrCheckFalse[index].check;
      }
    });
  }
  else if (localStorage.getItem("btnCompleted") !== null) {
    filetrCheckTrue[index].check = false;

    todoList.forEach((value, c) => {
      if (filetrCheckTrue[index].todo === todoList[c].todo) {
        todoList[c].check = filetrCheckTrue[index].check;
      }
    });
  }
  else {todoList[index].check = !todoList[index].check;}

  localStorage.setItem('todo', JSON.stringify(todoList));
}

export default SelectItem

