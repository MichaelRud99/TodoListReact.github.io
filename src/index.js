import React from 'react';
import ReactDOM from 'react-dom';
import "./CssVariable.css"
import './index.css';
import Aside from './Aside/Aside';
import Header from './mainSection/header/Header';
import TodoApp from './mainSection/todoApp/TodoApp';
import Footer from "./mainSection/footer/Footer";
import PatternTodoList from './_js/PatternList/PatternTodoList.js';
import addListMod from "./_js/ListMod/AddListMod";
import removeListMod from './_js/ListMod/RemoveListMod';

const root = document.getElementById('root');

const main = () => {

  let todoList = PatternTodoList("todo");
  const filetrCheckTrue = todoList.filter(todoList => todoList.check === true);
  const filetrCheckFalse = todoList.filter(todoList => todoList.check === false);

  ReactDOM.render(

    <React.StrictMode>
      <Aside />
      <section>
        <Header />
        <TodoApp todoList={todoList} filetrCheckTrue={filetrCheckTrue} filetrCheckFalse={filetrCheckFalse} />
        <Footer />
      </section>

    </React.StrictMode>,

    root,
    root.classList.add("flex"),

  );
}
main();
/* setInterval(main, 100); */

localStorage.removeItem("btnActive");
localStorage.removeItem("btnCompleted");

