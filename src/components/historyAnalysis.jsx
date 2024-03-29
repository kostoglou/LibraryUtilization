import React, { Component } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import Table from 'rc-table';
import { HiArrowRightCircle } from 'react-icons/hi2';

class HistoryAnalysis extends Component {

    constructor(props) {
        super(props);
    }

    state = { 
      libNameForSecondDiagram: 'saad',
    }

    test = () => {
      const com = this.props.comm;
      console.log("commits: " + com);
    }

    onClick =(key)=>{
      console.log("key: " + key );
      document.getElementById("diagramWithMetrics").style.display="flex";
      this.setState({libNameForSecondDiagram: key});
    }

    render() {
      //commits
      var commitsLi=['name'];
      var commitsLi2=[];
      for(var i=0;i<this.props.comm; i++){
        var v=i+1;
        commitsLi.push('v'+v);
        commitsLi2.push('Commit: '+v);
      }

      //Table
      //headers
      const headers = [ {
        title: 'Library',
        dataIndex: 'library',
        key: 'library',
        width: 250
      }];
      for(var i=0;i<this.props.comm; i++){
        var v=i+1;
        headers.push( {title:'Version'+v, dataIndex:'v'+v, key:'v'+v, width:100} );
      }
      headers.push(
        {
          title: 'Operations',
          dataIndex: '',
          key: 'd',
          render: (text, record) => (
            <div syle={{height: '40px', lineHeight: '40px', display: 'flex'}}>
              <button className='investigate' onClick={e =>this.onClick(record.library, e)} href="#">
                more <span><HiArrowRightCircle /></span>
              </button>
            </div>
          )
        }
      );

      //organize data
      var dataTable =[];
      var uniqueLibs=[];
      var libsSha=[];
      var sha="";
      var version=0;
      for(var i=0; i<this.props.data.length; i++){
        var lib="";
        sha = this.props.data[i].sha;
        version++;
        for(var j=0;j<this.props.data[i].dataProjectVersion.length;j++){
          lib = this.props.data[i].dataProjectVersion[j].library;
          if(!uniqueLibs.includes(lib)){
            uniqueLibs.push(lib);
          }
          libsSha.push({
            v: "v"+version, lib: lib, pucd: this.props.data[i].dataProjectVersion[j].pucd,
            puci: this.props.data[i].dataProjectVersion[j].puci,
            lduf: this.props.data[i].dataProjectVersion[j].lduf,
            liuf: this.props.data[i].dataProjectVersion[j].liuf
          });
        }
      }

      //Table data
      for(var k=0; k<uniqueLibs.length; k++){
        var object={library: uniqueLibs[k]};
        for (var i=1; i<=this.props.comm; i++){
          var foundInThisCommit =false;
          for(var k2=0; k2<libsSha.length; k2++){
            if(libsSha[k2].lib==uniqueLibs[k] && libsSha[k2].v=="v"+i){
              var key1 = "v"+i;
              object[key1]=<i className='fa fa-check' aria-hidden='true'></i>;
              foundInThisCommit=true;
            }
          }
          if(!foundInThisCommit){
            var key1 = "v"+i;
            object[key1]= <i className='fa fa-times' aria-hidden='true'></i>;
          }
        }

        dataTable.push( object );

      }

      //first chart
      const dataFirstChart = [];
      for(var i=0; i<this.props.data.length; i++){
        var n = this.props.data[i].nul;
        dataFirstChart.push({commit: commitsLi2, nul: n});
      }
      var data = [];
      data = dataFirstChart;

      //second chart
      var dataChart2=[];
      for(var i=0;i<libsSha.length;i++){
        if(this.state.libNameForSecondDiagram==libsSha[i].lib){
          dataChart2.push({commit:libsSha[i].v, 
                          pucd: libsSha[i].pucd, 
                          puci: libsSha[i].puci, 
                          lduf: libsSha[i].lduf, 
                          liuf: libsSha[i].liuf});
        }
      }


      return (
        <React.Fragment>    

          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="commit" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="nul"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />

          </LineChart>

            <div id="my-table">
              <Table columns={headers} data={dataTable}/>
            </div>

            <div id='diagramWithMetrics' style={{display:"none"}}>
              <LineChart
                width={500}
                height={300}
                data={dataChart2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="6 6" />
                <XAxis dataKey="commit" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pucd"
                  stroke="#8890d8"
                />
                <Line
                  type="monotone"
                  dataKey="puci"
                  stroke="#8456d8"
                />
                <Line
                  type="monotone"
                  dataKey="lduf"
                  stroke="#888908"
                />
                <Line
                  type="monotone"
                  dataKey="liuf"
                  stroke="#823458"
                />
              </LineChart>
            </div>
          </React.Fragment>

        );
    }
}
 
export default HistoryAnalysis;