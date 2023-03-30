import React, { useEffect, useRef } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { display } from '@mui/system';
import { Network } from 'vis-network';


function DiagramSystemtoApi(props)  {

  ///
var container = useRef(null);
    


/*var options = {};

useEffect(() => {
  const network =
    container.current &&
    new Network(container.current, { nodes, edges }, options);
}, [container, nodes, edges]);
*/

///
  const onClickListItem  = (e, callgraph) =>{
    var nodes = [
      // { id: 1, label: 'Node 1' },
      // { id: 2, label: 'Node 2' },
      // { id: 3, label: 'Node 3' },
      // { id: 4, label: 'Node 4' },
      // { id: 5, label: 'Node 5' }
    ];
    
    var edges = [
      // { from: 1, to: 3 },
      // { from: 1, to: 2 },
      // { from: 2, to: 4 },
      // { from: 2, to: 5 },
      // { from: 3, to: 3 }
    ];

    console.log("callgraph.length= "+callgraph.length);
    for(var i=0; i<callgraph.length; i++){
      var exists=false;
      for(var j=0; j<nodes.length; j++){
        if(nodes[j].label==callgraph[i].qualifiedName){
          exists=true;
          break;
        }
      }
      if(!exists){
        nodes.push({id: nodes.length, label: ''+callgraph[i].qualifiedName});
      }
    }

      for(var i=0; i<callgraph.length; i++){
        for(var j=0; j<callgraph.length; j++){
          if(callgraph[i].qualifiedName==callgraph[j].previousMethodString){
            var from=0;
            var to=0;
            for(var n=0; n<nodes.length; n++){
              if(callgraph[i].qualifiedName==nodes[n].label){
                from=n;
              }
              if(callgraph[j].qualifiedName==nodes[n].label){
                to=n;
              }
            }
            console.log("from: "+from +"to: " +to);
          
            edges.push({from: from, to: to});
          }
        }

      
      //console.log(callgraph[i].qualifiedName);
      //console.log(callgraph[i].previousMethodString);
    }



    // edges.push({ from: 2, to: 3});
    // nodes.push({id: 6, label: 'Node 6'})
    // console.log("edges: " +edges);
    // console.log("Nodes: " +nodes);
    // console.log(id);
  

    var container = document.getElementById("aboutMethodDiv");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        edges:{
          arrows: 'to'
        }
      };
      var network = new Network(container, data, options);
   
  }

  const onClickaClass = (e, id) => {
    
    document.getElementById('selectedClass').setNativeValue = "200";
    console.log(id);
    document.getElementById("liswithmethodsofclasses").style.display = "flex";
    document.getElementById("listwithclasses").style.display = "none";
  } 

    
      const systemClassestoLibrary=[ "class1", "class2", "class3", "class4", "class5", "class6", "class7", "class8", "class9", "class10", "class11"]
      const methodsofaSystemClass= props.data;
      
      const listitemsMethodsOfClasses = methodsofaSystemClass.map((x)=> 
        <li>
          <div key={x.name} onClick={(event)=>onClickListItem(event,x.callgraph)}>
            <a href="#"> {x.name}</a>
          </div>
        </li>
        );
      
      
    
      
      const listItemsClasses = systemClassestoLibrary.map((i) =>
        <li  onClick={(event)=>onClickaClass(event, i)}>  
          <a href="#"> {i} </a>
        </li>
        );


      return ( 
        <React.Fragment>
          <div class="classesandMethods"> 
            <ul id="listwithclasses" onClick={onClickaClass}>{listItemsClasses}</ul>
          
            <h3 id="selectedClass" /*onChange={handleChange}*/></h3>
            <ul id="liswithmethodsofclasses" style={{ display: "flex" }}>{listitemsMethodsOfClasses}</ul>
            
            <div id="aboutMethodDiv" style={{height: "400px"}}>
            </div>
            
          </div >
        </React.Fragment>   
       );
  }


    
export default DiagramSystemtoApi;