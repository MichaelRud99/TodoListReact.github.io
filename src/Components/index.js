import React from "react";
import ReactDOM from "react-dom";
import index from "./index.module.css";
import "./CssVariable.css";
import { TodoApp } from "./TodoApp";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Header } from "./Header";

ReactDOM.render(
   <React.StrictMode>
      <section className={index.flex}>
         <Aside />
         <section>
            <Header />
            <TodoApp />
            <Footer />
         </section>
      </section>
   </React.StrictMode>,

   document.getElementById("root")
);
