const readTodoList = () => {
   let todoList = [];
   // eslint-disable-next-line eqeqeq
   if (JSON.parse(localStorage.getItem("todo")) != undefined) {
      todoList = JSON.parse(localStorage.getItem("todo"));
   }
   return todoList;
};
export default readTodoList;
