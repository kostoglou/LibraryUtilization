import React, { useEffect, useRef } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { display } from '@mui/system';
import { Network } from 'vis-network';


function DiagramSystemtoApi(props)  {

  ///
var container = useRef(null);
    
var nodes = [
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
  { id: 4, label: 'Node 4' },
  { id: 5, label: 'Node 5' }
];


var edges = [
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 3 }
];

var options = {};

useEffect(() => {
  const network =
    container.current &&
    new Network(container.current, { nodes, edges }, options);
}, [container, nodes, edges]);


///

  const onClickListItem  = (e, id, network) =>{
    console.log(id);

    edges.push({ from: 2, to: 3});
    console.log("edges: " +edges);
    
   
  }

  const onClickaClass = (e, id) => {
    
    document.getElementById('selectedClass').setNativeValue = "200";
    console.log(id);
    document.getElementById("liswithmethodsofclasses").style.display = "flex";
    document.getElementById("listwithclasses").style.display = "none";
  } 

    
      const systemClassestoLibrary=[ "class1", "class2", "class3", "class4", "class5", "class6", "class7", "class8", "class9", "class10", "class11"]
      const methodsofaSystemClass= props.data;
      console.log(methodsofaSystemClass); //data ok
      
      const listitemsMethodsOfClasses = methodsofaSystemClass.map((x)=> 
      <li><div key={x.name} onClick={(event)=>onClickListItem(event,x.callgraph)}><a href="#"> {x.name}</a></div></li>
      );
      console.log("listitemsMethodsOfClasses: "+listitemsMethodsOfClasses); 
      
      const listItemsClasses = systemClassestoLibrary.map((i) =>
      <li  onClick={(event)=>onClickaClass(event, i)}>  <a href="#"> {i} </a></li>
      );


      return ( 
        <React.Fragment>
          <div class="classesandMethods"> 
            <ul id="listwithclasses" onClick={onClickaClass}>{listItemsClasses}</ul>
            
            <h3 id="selectedClass" /*onChange={handleChange}*/></h3>
            <ul id="liswithmethodsofclasses" style={{ display: "flex" }}>{listitemsMethodsOfClasses}</ul>
            
            <div id="aboutMethodDiv">
              <div class="network" ref={container}  />
            </div>
            
          </div >
        </React.Fragment>   
       );
  }

    
export default DiagramSystemtoApi;