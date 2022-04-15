import React from 'react';
import ReactDOM from 'react-dom';
import "./CssVariable.css"
import './index.css';
import Aside from './Aside/Aside';
import Header from './mainSection/header/Header';
import TodoApp from './mainSection/todoApp/TodoApp';
import Footer from "./mainSection/footer/Footer";

ReactDOM.render(

  <React.StrictMode>
    <section className="flex">
      <Aside />
      <section>
        <Header />
        <TodoApp />
        <Footer />
      </section>
    </section>
  </React.StrictMode>,

document.getElementById('root')
);
