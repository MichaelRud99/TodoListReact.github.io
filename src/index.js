import React from 'react';
import ReactDOM from 'react-dom';
import "./CssVariable.css"
import './index.css';
import Aside from './Aside/Aside';
import Header from './mainSection/header/Header';
import TodoApp from './mainSection/todoApp/TodoApp';
import Footer from "./mainSection/footer/Footer";

const root = document.getElementById('root');

  ReactDOM.render(

    <React.StrictMode>
      <Aside />
      <section>
        <Header />
        <TodoApp />
        <Footer />
      </section>

    </React.StrictMode>,

    root,
    root.classList.add("flex"),

  );