import React, { useState, useRef } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { display } from '@mui/system';
import { Network } from 'vis-network';
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";


if (typeof Highcharts === "object") {
  networkgraph(Highcharts);
}



function DiagramSystemtoApi(props)  {

var container = useRef(null);
    
const [chart, setChart] = useState({
  options: {
    chart: {
      type: "networkgraph",
      marginTop: 80
    },
    title: {
      text: "Network graph"
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"],
        layoutAlgorithm: {
          enableSimulation: false,
          linkLength: 100,
          integration: "verlet",
          approximation: "barnes-hut",
          gravitationalConstant: 0
        }
      }
    },
    series: [
      {
        marker: {
          radius: 10
        },
        dataLabels: {
          enabled: true,
          linkFormat: ""
        },
        data: [
        ],
        nodes: [
        ]
      }
    ]
  }
});


const onClickListItem  = (e, callgraph, first) =>{
  console.log("meth: "+first);

  var flagstop = false;
  var A = [first];
  var B = [];
  while(B.length<900 && flagstop==false){
    if(A.length>0){
      for(var i=0; i<callgraph.length; i++){
        if(A[0]==callgraph[i].previousMethodString){
          A.push(callgraph[i].qualifiedName);
          B.push({from: callgraph[i].previousMethodString, to: callgraph[i].qualifiedName});
        }
      }
      A.shift();
    }
    else{
      flagstop = true;
    }
  }
  console.log("B: "+B);

  //////
  let myserie = chart.options.series;

  for(var i=0; i<B.length; i++){
    myserie[0].data = B;
  }

  setChart({ options: { series: myserie } });
    
  }

  const onClickaClass = (e, id) => {
    
    document.getElementById('selectedClass').setNativeValue = "200";
    console.log(id);
    document.getElementById("liswithmethodsofclasses").style.display = "flex";
    document.getElementById("listwithclasses").style.width = "100px";
  } 
  
      // const systemClassestoLibrary=[ "class1", "class2", "class3", "class4", "class5", "class6", "class7", "class8", "class9", "class10", "class11"]
      const methodsofaSystemClass= props.data;
      
      const listitemsMethodsOfClasses = methodsofaSystemClass.map((x)=> 
        <li>
          <div key={x.name} onClick={(event)=>onClickListItem(event,x.callgraph, x.name)}>
            <a href="#"> {x.name}</a>
          </div>
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
            
            <div id="aboutMethodDiv" style={{height: "500px"}}>
              <HighchartsReact highcharts={Highcharts} options={chart.options} style={{height: "500px"}} />
            </div>
            
          </div >
        </React.Fragment>   
       );
  }


    
export default DiagramSystemtoApi;