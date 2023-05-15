import React, { useState, useRef } from 'react';
import { Network } from 'vis-network';


function DiagramSystemtoApi(props)  {
  var container = useRef(null);
      
  const onClickListItem  = (e, callgraph, first) =>{
    createGraph(callgraph,first,100);
  }

  function createGraph(callgraph,first,maxNodes){
    var nodes = [];
    var edges = [];
    console.log("meth: "+first);

    var flagstop = false;
    var A = [first];
    var B = [];
    while(B.length<maxNodes && flagstop==false){
      if(A.length>0){
        for(var i=0; i<callgraph.length; i++){
          if(A[0]==callgraph[i].previousMethod){
            A.push(callgraph[i].qualifiedName);
            B.push({from: callgraph[i].previousMethod, to: callgraph[i].qualifiedName});
            if(!nodes.some(e => e.id === callgraph[i].previousMethod) && callgraph[i].previousMethod != first){
              nodes.push({id: callgraph[i].previousMethod, label: callgraph[i].previousMethod});
            }
            else if(!nodes.some(e => e.id === callgraph[i].previousMethod) && callgraph[i].previousMethod == first){
              nodes.push({id: callgraph[i].previousMethod, label: callgraph[i].previousMethod, color: { border: "#FF0000" }});
            }
            if(!nodes.some(e => e.id === callgraph[i].qualifiedName)){
              nodes.push({id: callgraph[i].qualifiedName, label: callgraph[i].qualifiedName});
            }
          }
        }
        A.shift();
      }
      else{
        flagstop = true;
      }
    }
    console.log("B: "+B);

    edges = B;
    
    document.getElementById("GraphDiv").style.display="block";
    
    var container = document.getElementById("aboutMethodDiv");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        physics: false,
        autoResize: true,
        height: '100%',
        width: '100%',
        edges:{
          arrows: 'to'
        },
        layout: {
          improvedLayout: false,
          hierarchical: {
            enabled: true,
            levelSeparation: 500,
            nodeSpacing: 500,
            treeSpacing: 200,
            blockShifting: false,
            edgeMinimization: true,
            parentCentralization: true,
            // sortMethod: "directed",
          }
        }
      };
      var network = new Network(container, data, options);
  }

  const rangeChanged= ()=>{
    var value = document.getElementById('myRange').value;
    document.getElementById('sliderValue').innerHTML = value; 

  }

  const onClickaClass = (e, id) => {
      
    document.getElementById('selectedClass').setNativeValue = "200";
    console.log(id);
    document.getElementById("liswithmethodsofclasses").style.display = "flex";
    document.getElementById("listwithclasses").style.width = "100px";
  } 
    
  const libname = props.libname;
  console.log("libname::: " +libname); 
  var methodsofaSystemClass= {};
  for(var i=0; i<props.data.length; i++){
    if(libname==props.data[i].libraryname){
      methodsofaSystemClass= props.data[i].projectModuleDTOS;
    }
  }
        
  const listitemsMethodsOfClasses = methodsofaSystemClass.map((x)=> 
    <li>
    <div key={x.firstmeth} onClick={(event)=>onClickListItem(event, x.listcallgraph, x.firstmeth)}><a href="#"> {x.firstmeth}</a></div>
    </li>
  );
        
  // const listItemsClasses = systemClassestoLibrary.map((i) =>
  //   <li  onClick={(event)=>onClickaClass(event, i)}>  
  //     <a href="#"> {i} </a>
  //   </li>
  //   );

  return ( 
    <React.Fragment>
      <div class="classesandMethods"> 
        {/* <ul id="listwithclasses" onClick={onClickaClass} style={{ display: "block" }}>{listItemsClasses}</ul> */}
            
        <h3 id="selectedClass" /*onChange={handleChange}*/></h3>
        <ul id="liswithmethodsofclasses" style={{ display: "flex" }}>{listitemsMethodsOfClasses}</ul>

        <div id="GraphDiv" style={{display:"none"}}>
          <div id="aboutMethodDiv" style={{height: "500px"}}></div>
          <div class="slidecontainer">
            <input type="range" min="1" max="900" value="100" class="slider" id="myRange" onInput={()=>this.rangeChanged()} onDrag={}/>
            <p>Value: <span id="sliderValue"></span></p>
          </div>
          <button onc></button>
        </div>
              
      </div >
    </React.Fragment>   
  );
}

export default DiagramSystemtoApi;