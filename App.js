
 import React from "react";
 import  ReactDOM  from "react-dom";
    //const heading = React.createElement("h1",{id:"heading"},"Helo Ajith!!");
    // console.log(heading);
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // //root.render(heading);
   
    

    // Create this

    // <div id ="parent">
    //     <div id = "child">
    //         <h1>I'm H1 tag!!!</h1>
    //     </div>
    // </div>

    // const parent = React.createElement("div",{id:"parent"},
    // React.createElement("div",{id:"child"}),
    // React.createElement("h1",{},"I'm H1 Tag!!!")
    // );
    // console.log(parent);
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);



    // Create this

    // <div id ="parent">
    //     <div id = "child">
    //         <h1>I'm H1 tag!!!</h1> 
    //         <h2> I'm h2 tag!!!</h2>
    //     </div>
    // </div>

    // const parent = React.createElement("div",{id:"parent"},
    // React.createElement("div",{id:"child"}),
    // //Passing siblings in form of Array
    // [React.createElement("h1",{},"I'm H1 Tag!!!"),React.createElement("h2",{},"I'm H2 Tag!!!")]
    // );

    // console.log(parent);
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

    // Create this

    // <div id ="parent">
    //     <div id = "child">
    //         <h1>I'm H1 tag!!!</h1> 
    //         <h2> I'm h2 tag!!!</h2>
    //     </div>
    //      <div id = "child">
    //         <h1>I'm H1 tag!!!</h1> 
    //         <h2> I'm h2 tag!!!</h2>
    //      </div>
    // </div>

    const parent = React.createElement("div",{id:"parent"},

    [React.createElement("div",{id:"child"}),
    //Passing siblings in form of Array
    [React.createElement("h1",{},"I'm H1 Tag!!!"),
    React.createElement("h2",{},"I'm H2 Tag!!!")]],

    [React.createElement("div",{id:"child"}),
    //Passing siblings in form of Array
    [React.createElement("h1",{},"I'm H1 Tag!!!"),
    React.createElement("h2",{},"I'm H2 Tag!!!")]]
    );

    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);