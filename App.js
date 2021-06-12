import React, { useState } from "react";
 import List from "./List";

const App = () => {

  const [inputlist , setinputlist]= useState();
  const[item , setitem]= useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };
  const listitem = () =>{
    setitem((olditems)=>{
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  const deleteItems =(id)=>{
    console.log("deleted");
    setitem((olditems)=>{
      return olditems.filter((arrele, index)=>{
        return index !==id;
      });
    });
};

return (
<>
<div className="main_div">
  <div className="center_div">
<br />
<h1>LineUp List</h1>
<br />
<input type="text" placeholder="Enter your List" value={inputlist} onChange={itemEvent} />
<button onClick={listitem}>+</button>
<ol>
 
  {
    item.map((itemval , index)=>{
    return <List key={index} id = {index} text = {itemval}  onSelect={deleteItems} />;
  })
  }
</ol>
  </div>
</div>

</>
);
};


export default App;