import './App.css';
import React, { Component } from 'react'
import Welcome from './components/welcome';
import HistoryAnalysis from './components/historyAnalysis';
import MyTable from './components/mytable';
import DiagramSystemtoApi from './components/diagramSystemtoApi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {TiInfoLargeOutline} from 'react-icons/ti';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showTable: false,
    showWelcome: true,
    showHistoryAnalysis: false,
    commitsforhistory: 2,
    showDiagram1: false, 
    nul: "",
    dataTable : [],
    dataFirstMethods :[],
    selectedLibrary: "",
    dataProject: []
  }

  onbackclickAll = () => {
    if (this.state.showTable == true) {
      this.handleBackClick();
      document.getElementById("backButtonAllId").style.display = "none";
    }

    if(this.state.showDiagram1==true){
      this.handleBacktoTableClick();
      document.getElementById("backButtonAllId").style.display="flex";
    }

    if(this.state.showHistoryAnalysis==true){
      this.handleBackClick();
      document.getElementById("backButtonAllId").style.display = "none";
    }
  }

  handleonMouseEnterInformation = () => {
    document.getElementById("infoText").style.display = "block";
    document.getElementById("buttonIcon").style.display = "none";
  }

  handleonMouseLeaveInformation = () => {
    document.getElementById("infoText").style.display = "none";
    document.getElementById("buttonIcon").style.display = "block";
  }

  handleGoClick = async () => {
    const url = document.getElementById("input1").value;
    document.getElementById('waittingAnalysis').style.display='block';
    
    await fetch("http://195.251.210.147:8089/startAnalysisWithMetricsForOneProjectVersion?url="+url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        //sto object kanw for object.length
        var obj= JSON.parse(JSON.stringify(json));

        if(obj.projectModuleDTOS.length==1){
          this.setState({nul: "nul: "+obj.projectModuleDTOS[0].nul});
          var data=[];
          var listDataForLibrary=[];

          for (var i=0; i<obj.projectModuleDTOS[0].libraries.length; i++) {
            var libString = obj.projectModuleDTOS[0].libraries[i].name;
            var startWord = "dependency/";
            var endWord = "-sources.jar";
            var startIndex = libString.indexOf(startWord) + startWord.length;
            var endIndex = libString.indexOf(endWord);
            var lib = libString.substring(startIndex, endIndex);

            var pucd= obj.projectModuleDTOS[0].libraries[i].pucd;
            if(pucd=="NaN"){
              pucd=0;
            }
            var puci= obj.projectModuleDTOS[0].libraries[i].puci;
            if(puci=="NaN"){
              puci=0;
            }
            var lduf= obj.projectModuleDTOS[0].libraries[i].lduf;
            if(lduf=="NaN"){
              lduf=0;
            }
            var liuf= obj.projectModuleDTOS[0].libraries[i].liuf;
            if(liuf=="NaN"){
              liuf=0;
            }
            data.push({library: lib, pucd: pucd.toFixed(3), 
              puci: puci.toFixed(3), lduf: lduf.toFixed(3), liuf: liuf.toFixed(3)});
              
            var listprojectModuleDTOS=[];
            //First methods
            for(var j=0; j<obj.projectModuleDTOS[0].libraries[i].methodDetailsDTOList.length; j++){
              var firstmeth = obj.projectModuleDTOS[0].libraries[i].methodDetailsDTOList[j].methodName;
              if(firstmeth.includes("(")){
                firstmeth = firstmeth.substring(0,firstmeth.indexOf("("));
              }

              var listcallgraph=[];
              //callgraph
              for ( var k=0; k<obj.projectModuleDTOS[0].libraries[i].methodDetailsDTOList[j].callDTOList.length; k++){
                var qualifiedName = obj.projectModuleDTOS[0].libraries[i].methodDetailsDTOList[j].callDTOList[k].qualifiedName;
                var previousMethod = obj.projectModuleDTOS[0].libraries[i].methodDetailsDTOList[j].callDTOList[k].previousMethod;
                listcallgraph.push({qualifiedName: qualifiedName, previousMethod: previousMethod});
              }
            
              listprojectModuleDTOS.push({firstmeth: firstmeth, listcallgraph: listcallgraph})
            }

            listDataForLibrary.push({libraryname: lib, projectModuleDTOS:listprojectModuleDTOS});
          }
          this.setState({dataTable: data});
          this.setState({dataFirstMethods : listDataForLibrary});
        }

      })
      .catch((error) => console.error(error));

      this.setState({ showTable: true });
      this.setState({ showWelcome: false });
      document.getElementById("backButtonAllId").style.display = "flex";
      document.getElementById("waittingAnalysis").style.display = "block";      
    }

  handleHistoryClick = async () => {
    const url = document.getElementById("input1").value;
    const commits = document.getElementById("input2").value;
    this.setState({ commitsforhistory: commits });

    await fetch("http://195.251.210.147:8089/startHistoryAnalysis?url="+url+"&numberOfCommits="+commits, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        var dataProject = [];
        var obj= JSON.parse(JSON.stringify(json));
        for(var k=0; k<obj.length; k++){

          var sha = obj[k].sha;
          var nul = obj[k].projectModuleDTOS[0].nul;
          

          if(obj[k].projectModuleDTOS.length==1){
            this.setState({nul: "nul: "+obj[k].projectModuleDTOS[0].nul});
            
            var dataProjectVersion = [];

            for (var i=0; i<obj[k].projectModuleDTOS[0].libraries.length; i++) {
              var libString = obj[k].projectModuleDTOS[0].libraries[i].name;
              var startWord = "dependency/";
              var endWord = "-sources.jar";
              var startIndex = libString.indexOf(startWord) + startWord.length;
              var endIndex = libString.indexOf(endWord);
              var lib = libString.substring(startIndex, endIndex);

              var pucd= obj[k].projectModuleDTOS[0].libraries[i].pucd;
              if(pucd=="NaN"){
                pucd=0;
              }
              var puci= obj[k].projectModuleDTOS[0].libraries[i].puci;
              if(puci=="NaN"){
                puci=0;
              }
              var lduf= obj[k].projectModuleDTOS[0].libraries[i].lduf;
              if(lduf=="NaN"){
                lduf=0;
              }
              var liuf= obj[k].projectModuleDTOS[0].libraries[i].liuf;
              if(liuf=="NaN"){
                liuf=0;
              }
              dataProjectVersion.push({library: lib, pucd: pucd.toFixed(3), 
                puci: puci.toFixed(3), lduf: lduf.toFixed(3), liuf: liuf.toFixed(3)});
            }

            dataProject.push({sha: sha, nul: nul, dataProjectVersion: dataProjectVersion});
          
          }
        }
        dataProject= dataProject.reverse();
        this.setState({dataProject: dataProject});
        
        document.getElementById("backButtonAllId").style.display = "flex";
        console.log("ok");
        this.setState({ showWelcome: false });
        this.setState({ showHistoryAnalysis: true });
      })
      .catch((error) => console.error(error));
      
  }
  

  handleBackClick = () => {
    this.setState({ showWelcome: true });
    this.setState({ showTable: false });
    this.setState({ showDiagram1: false });
    this.setState({showHistoryAnalysis: false});
  };

  handleClickofTableofLibrary=(key) => {
    console.log("key::::: "+key);
    this.setState({ showDiagram1: true });
    this.setState({ showTable: false });
    this.setState({ selectedLibrary: key});
  }

  handleBacktoTableClick = () => {
    this.setState({ showTable: true });
    this.setState({ showDiagram1: false });
  }

  render() {

    return (
      <body class="body">

        <header class="header"><h1 className="box" id='libraryUtilization'>Library Utilization</h1></header>
        
        <aside class="asideInfo">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <div class="sti_container" onMouseEnter={this.handleonMouseEnterInformation} onMouseLeave={this.handleonMouseLeaveInformation} >
            <button class="btn" >
              <span id="buttonIcon" class="btn-icon" ><TiInfoLargeOutline/></span>
              <p id="infoText" class="btn-text" style={{ display: "none" }} > <h2>Why Library Utilazation?</h2><h4>because...</h4>
                                                                              <h2>About the Metrics</h2><h4>The Metrics...</h4>
                                                                              <h2>How to use the app?</h2><h4>the way of use is...</h4></p>
            </button>
          </div>
        </aside>
        <aside class="asideBack"><button id="backButtonAllId" className="backbutton" onClick={this.onbackclickAll} style={{ display: "none" }} >BACK <span><MdOutlineArrowBackIosNew /></span></button></aside>
        
        
        <main class="main">
          {this.state.showWelcome && <Welcome ongoclick={this.handleGoClick} onHistoryclick={this.handleHistoryClick}/>}
          {this.state.showHistoryAnalysis && <HistoryAnalysis data={this.state.dataProject} comm={this.state.commitsforhistory} />}
          {this.state.showTable && <MyTable onclickoftableoflibrary={this.handleClickofTableofLibrary}
              data={this.state.dataTable} nul={this.state.nul} onbackclick={this.handleBackClick} />}
          {this.state.showDiagram1 && <DiagramSystemtoApi data={this.state.dataFirstMethods} libname={this.state.selectedLibrary}/>}
        </main>
        
      
      </body>

    );
  }
}

export default App;
