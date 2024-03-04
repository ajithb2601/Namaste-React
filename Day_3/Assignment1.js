import React from "react";
import ReactDOM from "react-dom/client";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

const h1 = React.createElement("h1", {}, "This is h1 tag")
const h2 = React.createElement("h2", {}, "This is h2 tag")
const h3 = React.createElement("h3", {}, "This is h3 tag")

const title = React.createElement("div",{class:"title"},[h1,h2,h3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(title)

// ------------------------------------------

// Q: Create the same element using JSX

const header = (
    <div className="Title">
    <h1>This is h1 tag</h1>
    <h2>This is h2 tag</h2>
    <h3>This is h3 tag</h3>
    </div>
);

//root.render(header)


// ------------------------------------------


// Q: Create the Functional Component using JSX
const Header = () => {
   return(
        <div className="title">
            <h1>
            This is h1 tag
            </h1>
        <h2>
            This is h2 tag
        </h2>
        <h3>
            This is h3 tag
        </h3>
        </div>
    );
   };
//root.render(<Header/>)


// ------------------------------------------

// Q: Pass attribute hello into the h1 tag in JSX

const Headers = () => {
    return(
         <div className="title">
             <h1 id = "hello">
             This is h1 tag
             </h1>
         <h2>
             This is h2 tag
         </h2>
         <h3>
             This is h3 tag
         </h3>
         </div>
     );
    };
 //root.render(<Headers/>)

 // ------------------------------------------


 // Q: Composition of Component (Add a component inside another)
 
const AnotherComponent = () => <span id="another">This is another component</span>

const Main_Header = () => {
    return(
         <div className="title">
        <h1 id = "hello">
             This is h1 tag
         </h1>
        {AnotherComponent()}
         <h2>
             This is h2 tag
         </h2>
         <AnotherComponent/>
         <h3>
             This is h3 tag
         </h3>
         <AnotherComponent></AnotherComponent>
         </div>
     );
    };
 root.render(<Main_Header/>)

