import './App.css';
import React, { Component } from 'react'
import Welcome from './components/welcome';
import MyTable from './components/mytable';
import DiagramSystemtoApi from './components/diagramSystemtoApi';


class App extends Component {

  state = {  
    showTable: false,
    showWelcome: true,
    showDiagram1:false

} 

handleGoClick = () =>{
  this.setState({showTable: true});
  this.setState({showWelcome: false});
};

handleBackClick = () =>{
  this.setState({showWelcome: true});
  this.setState({showTable: false});
  this.setState({showDiagram1:false})
};

handleClickofTableofLibrary = () =>{
  this.setState({showDiagram1:true});
  this.setState({showTable:false});
}

handleBacktoTableClick = () =>{
  this.setState({showTable:true});
  this.setState({showDiagram1:false});
}

render(){
   

  const data= [
    {library:"lib1",metric1:"20%",metric2:"10%", metric3:"30%"},
    {library:"lib2",metric1:"20%",metric2:"10%", metric3:"30%"},
  ]
  
  const data2= [
    {systemclass:"Class 1", firstmethod:"Method 1"},
    {systemclass:"Class 2", firstmethod:"Method 2"},
    {systemclass:"Class 3", firstmethod:"Method 1"},
  ] 
    return (
      <body >
        <header class="header"> </header>
        <aside class="sidebar"></aside>
        <main class="main">
          <h1 class="box" id='libraryUtilization'>Library Utilization</h1>  
            {this.state.showWelcome && <Welcome ongoclick={this.handleGoClick}/>}
            {this.state.showTable && <MyTable onclickoftableoflibrary={this.handleClickofTableofLibrary}
                                              data={data} onbackclick={this.handleBackClick}/>}
            {this.state.showDiagram1 && <DiagramSystemtoApi onbacktoTableclick={this.handleBacktoTableClick}/>}
        </main>
        
      </body>
  );
}
}

export default App;
