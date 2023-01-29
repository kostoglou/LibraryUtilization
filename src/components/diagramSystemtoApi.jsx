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
      <li id="listitems" key={i} onClick={(event)=> this.onClickListItem(event,i)} >
        {i}
      </li>
    );


        return ( 
          <React.Fragment>
              <main > 
                <ul>{listItems}</ul>
              
                </main >

                {this.state.showInfoaboutMethod && 
                <main>
                  <AboutMethod />
                  <AboutMethod />
                  <AboutMethod />
                </main>
               }
                <button className="backorgobutton" onClick={this.props.onbacktoTableclick}>Back</button>
            </React.Fragment>
          
       );
  }
}
    
export default DiagramSystemtoApi;