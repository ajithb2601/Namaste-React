
 import React from "react";
 import  ReactDOM  from "react-dom";
   
 //Using React.createElement
 const header = React.createElement(
   "h1",
   {id:"heading"},
   "This is header tag using React.createElement"
 );

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(header);//This is the way to render React.createElemets

 // --------------------------------------------------------

 //Using JSX
 //Syntax -- ()=>{} 
 //Always start with Capital Letters
const HeaderJSX = () => {
   return <h1 id = "heading">This is Header Tag using JSX</h1>
}
const root2 = ReactDOM.createRoot(document.getElementById("root"));
 root2.render(<HeaderJSX/>);//This is the way to render JSX

// --------------------------------------------------------

const FooterJSX = () => {
   return(
      <div>
         <h1 id = "footer">
         This is Footer Tagsssss
         </h1>
      </div>
   );
};
const root3 = ReactDOM.createRoot(document.getElementById("root"));
 root3.render(<FooterJSX/>);//This is the way to render JSX

// --------------------------------------------------------

 //Component Composition
 const HeadersJSX = () => <h1 id = "header">This is header tags </h1>

 const BodyJSX = () => {
   return(
      <div>
         <h1 id = "footer">
            {/* Component Composition */}
            {HeadersJSX()}
            <HeadersJSX/>
            <HeadersJSX></HeadersJSX>
         This is Body Tag 
         </h1>
      </div>
   );
};
root3.render(<BodyJSX/>);//This is the way to render JSX


// --------------------------------------------------------

const text = "kavya";

const BodysJSX = () => {
   return(
      <div>
         <h1 id = "footer">
            {/* {}- can write anything */}
         <span>{text}</span>
         This is Body Tag 
         </h1>
      </div>
   );
};
root3.render(<BodysJSX/>);//This is the way to render JSX
