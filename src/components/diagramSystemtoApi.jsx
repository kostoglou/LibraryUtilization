import React, { useState, useRef } from 'react';
import { Network } from 'vis-network';

function DiagramSystemtoApi(props)  {

  const [value, setValue] = useState(14);
  const [firstMethod, setFirstMethod] = useState("");
  const [callGraph, setCallGraph] = useState("");

  var container = useRef(null);
      
  const onClickListItem  = (e, callgraph, first) =>{
    setFirstMethod(first);
    setCallGraph(callgraph);
    createGraph(callgraph,first,value);
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
            var classAndMethod = callgraph[i].previousMethod.split(".")[callgraph[i].previousMethod.split(".").length-2] 
                                +"."+callgraph[i].previousMethod.split(".")[callgraph[i].previousMethod.split(".").length-1] ;
            if(!nodes.some(e => e.id === callgraph[i].previousMethod) && callgraph[i].previousMethod != first){
              nodes.push({id: callgraph[i].previousMethod, label: classAndMethod});
            }
            else if(!nodes.some(e => e.id === callgraph[i].previousMethod) && callgraph[i].previousMethod == first){
              nodes.push({id: callgraph[i].previousMethod, label: classAndMethod, color: { border: "#FF0000"}});
            }
            if(!nodes.some(e => e.id === callgraph[i].qualifiedName)){
              nodes.push({id: callgraph[i].qualifiedName, label: classAndMethod});
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
    
    document.getElementById("GraphDiv").style.display="flex";
    
    var container = document.getElementById("aboutMethodDiv");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        interaction:{hover:true},
        physics: false,
        autoResize: true,
        height: '500px',
        width: '100%',
        nodes:{
          color: '#a7a7a7'
        },
        edges:{
          arrows: 'to'
        },
        layout: {
          improvedLayout: false,
          hierarchical: {
            enabled: true,
            //levelSeparation: 500,
            nodeSpacing: 200,
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

  /*const changetheCallgraph=()=>{
    console.log(value);
    console.log(firstMethod);

   // createGraph(callGraph,firstMethod,value)
  }*/

  const handleChange = (event) => {
    console.log(value);
    setValue(event.target.value);
    
  };

  const handleDrop = (event) => {
    console.log("Drop!!");
    createGraph(callGraph,firstMethod,value);
    
  };

    
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
    <div key={x.firstmeth} onClick={(event)=>onClickListItem(event, x.listcallgraph, x.firstmeth)} ><a href="#"> {x.firstmeth}</a></div>
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
        
            
        <h3 id="methods" > Select a method</h3>
        <ul id="liswithmethodsofclasses" style={{ display: "flex" }}>{listitemsMethodsOfClasses}</ul>

        <div id="GraphDiv" style={{display:"none"}}>
          <div id="aboutMethodDiv" style={{height: "500px", width:"90%"}}></div>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <div class="slidecontainer">
            <input type="range" min="1" max="900" value={value} class="slider" id="myRange" defaultValue="3" step="1" onChange={handleChange} 
                  onMouseUp={handleDrop}/>
            <p>Value: {value}</p>
          </div>
          
        
        </div>
              
      </div >
    </React.Fragment>   
  );
}

export default DiagramSystemtoApi;