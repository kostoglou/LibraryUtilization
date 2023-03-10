import React, { Component } from 'react';
import AboutMethod from './aboutmethod';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { display } from '@mui/system';


class DiagramSystemtoApi extends Component  {
  constructor(props){
    super(props);
  }
  
  state = {
    showInfoaboutMethod: false,
  }
  
  onClickListItem  = (e, id) =>{
    console.log(id);
    this.setState({showInfoaboutMethod: true});
    
  }
  /*handleChange = (event) => {
    
  }*/
  
  onClickaClass = (e, id) => {
    
    document.getElementById('selectedClass').setNativeValue = "200";
    console.log(id);
    document.getElementById("liswithmethodsofclasses").style.display = "flex";
    document.getElementById("listwithclasses").style.display = "none";
  } 

    render() { 
      const systemClassestoLibrary=[ "class1", "class2", "class3", "class4", "class5", "class6", "class7", "class8", "class9", "class10", "class11"]
      const methodsofaSystemClass=this.props.data;
      console.log(methodsofaSystemClass); //data ok
      
      const listitemsMethodsOfClasses = methodsofaSystemClass.map((x)=> 
      <ul id="liswithmethodsofclasses">
        <li key={x} onClick={(event)=> this.onClickListItem(event,x)}><a href="#"> {x}</a></li>
      </ul>
      );
      console.log("listitemsMethodsOfClasses: "+listitemsMethodsOfClasses); 
      
      const listItemsClasses = systemClassestoLibrary.map((i) =>
      <li  onClick={(event)=>this.onClickaClass(event, i)}> 
        <a href="#"> {i} </a> 
      </li>
      );


      return ( 
        <React.Fragment>
          <div class="classesandMethods"> 
            <ul id="listwithclasses" onClick={this.onClickaClass}>{listItemsClasses}</ul>
            
            <h3 id="selectedClass" /*onChange={handleChange}*/></h3>
            <ul style={{ display: "flex" }}>{listitemsMethodsOfClasses}</ul>
            {this.state.showInfoaboutMethod && 
              <div>
                <AboutMethod />
              </div>
            }
          </div >
        </React.Fragment>   
       );
  }
}
    
export default DiagramSystemtoApi;