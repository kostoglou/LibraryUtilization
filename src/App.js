import './App.css';
import React, { Component } from 'react'
import Welcome from './components/welcome';
import MyTable from './components/mytable';
import DiagramSystemtoApi from './components/diagramSystemtoApi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {BsInfoSquareFill} from 'react-icons/bs';




class App extends Component {

  state = {
    showTable: false,
    showWelcome: true,
    showDiagram1: false,

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
  }

  handleonMouseEnterInformation = () => {
    document.getElementById("infoText").style.display = "block";
  }

  handleonMouseLeaveInformation = () => {
    document.getElementById("infoText").style.display = "none";
  }

  handleGoClick = () => {
    this.setState({ showTable: true });
    this.setState({ showWelcome: false });
    document.getElementById("backButtonAllId").style.display = "flex";

    document.getElementById("waittingAnalysis").style.display = "block";
  };

  handleBackClick = () => {
    this.setState({ showWelcome: true });
    this.setState({ showTable: false });
    this.setState({ showDiagram1: false })
  };

  handleClickofTableofLibrary = () => {
    this.setState({ showDiagram1: true });
    this.setState({ showTable: false });
  }

  handleBacktoTableClick = () => {
    this.setState({ showTable: true });
    this.setState({ showDiagram1: false });
  }

  render() {


    const data = [
      { library: "lib1", metric1: "20%", metric2: "10%", metric3: "30%" },
      { library: "lib2", metric1: "20%", metric2: "10%", metric3: "30%" },
    ]

    const data2 = [
      { systemclass: "Class 1", firstmethod: "Method 1" },
      { systemclass: "Class 2", firstmethod: "Method 2" },
      { systemclass: "Class 3", firstmethod: "Method 1" },
    ]
    return (
      <body id="body">

        <header><h1 className="box" id='libraryUtilization'>Library Utilization</h1></header>

        <button id="backButtonAllId" className="backbutton" onClick={this.onbackclickAll} style={{ display: "none" }} >previews <span><MdOutlineArrowBackIosNew /></span></button>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

        <div class="sti_container" onMouseEnter={this.handleonMouseEnterInformation} onMouseLeave={this.handleonMouseLeaveInformation} >
          <button class="btn" >
            <span class="btn-icon"><BsInfoSquareFill/></span>
            <p id="infoText" class="btn-text" style={{ display: "none" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </button>
        </div>

        <main>


          {this.state.showWelcome && <Welcome ongoclick={this.handleGoClick} />}
          {this.state.showTable && <MyTable onclickoftableoflibrary={this.handleClickofTableofLibrary}
            data={data} onbackclick={this.handleBackClick} />}
          {this.state.showDiagram1 && <DiagramSystemtoApi />}
        </main>
        <footer> </footer>
      </body>

    );
  }
}

export default App;
