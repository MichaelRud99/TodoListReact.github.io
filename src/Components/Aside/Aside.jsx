import React from "react";
import "./Aside.css";

const Aside = () => {
   return (
      <aside>
         <h1 className="aside__title">JavaScript</h1>
         <p className="aside__subtitle">
            Vanilla JavaScript Example
            <a
               href="https://github.com/monsegard/monsegard1.github.io"
               className="link"
            >
               Source
            </a>
         </p>
         <hr className="aside__hr"></hr>
         <blockquote className="quote speech-bubble">
            <p className="quote__p italic">
               JavaScript® (often shortened to JS) is a lightweight,
               interpreted, object-oriented language with first-class functions,
               most known as the scripting language for Web pages, but used in
               many non-browser environments as well such as node. js or Apache
               CouchDB.
            </p>
         </blockquote>
         <div>
            <a
               href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
               className="link"
            >
               JavaScript
            </a>
         </div>
         <hr className="aside__hr"></hr>
         <p className="aside_p italic">
            If you have other helpful links to share, or find any of the links
            above no longer work, please let us know.
         </p>
      </aside>
   );
};
export default Aside;
