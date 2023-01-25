import React, { Component } from 'react';
import AboutMethod from './aboutmethod';

class DiagramSystemtoApi extends Component  {
  state = {
    showInfoaboutMethod: false,
    
  }
  onClickListItem  = (e, id) =>{
    console.log(id);
    this.setState({showInfoaboutMethod: true});
    
  }
  
    render() {   
      
      const systemClassestoLibrary=[ "class1", "class2", "class3", "class4"]
      const listItems = systemClassestoLibrary.map((i) =>
      <li key={i} onClick={(event)=> this.onClickListItem(event,i)} >
        {i}
      </li>
    );


        return ( 
          <React.Fragment>
              <div > 
                <ul>{listItems}</ul>
              
                </div >

                {this.state.showInfoaboutMethod && 
                <div>
                  <AboutMethod />
                  <AboutMethod />
                  <AboutMethod />
                </div>
               }
                <button onClick={this.props.onbacktoTableclick}>Back</button>
            </React.Fragment>
          
       );
  }
}
    
export default DiagramSystemtoApi;