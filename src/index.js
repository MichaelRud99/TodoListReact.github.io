import React from "react";
import ReactDOM from "react-dom";
import index from "./Components/index.module.css";
import "./Components/CssVariable.css";
import TodoApp from "./Components/TodoApp/TodoApp";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

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
