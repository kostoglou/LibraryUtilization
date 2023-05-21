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

class HistoryAnalysis extends Component {

    constructor(props) {
        super(props);
    }

    state = {  }

    test = () => {
      const com = this.props.comm;
      console.log("commits: " + com);
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

      var uniqueLibs=[];
      var libsSha=[];
      var sha="";
      for(var i=0; i<this.props.data.length; i++){
        var lib="";
        sha = this.props.data[i].sha;
        for(var j=0;j<this.props.data[i].dataProjectVersion.length;j++){
          lib = this.props.data[i].dataProjectVersion[j].lib;
          if(!uniqueLibs.includes(lib)){
            uniqueLibs.push(lib);
          }
          libsSha.push({sha: sha, lib: lib});
        }
      }
      var yesNoTableLibs=[];
      var shaYes=[];
      for(var i=0; i<uniqueLibs.length; i++){
        for(var j=0; j<libsSha.length; j++){
          var l = libsSha[j].lib;
          var s = libsSha[j].sha;
          if(uniqueLibs[i]==l){
            shaYes.push(s);            
          }
        }
        yesNoTableLibs.push(uniqueLibs[i], ...shaYes);
      }


      //first chart
      const dataFirstChart = [];
      for(var i=0; i<this.props.data.length; i++){
        var n = this.props.data[i].nul;
        dataFirstChart.push({commit: commitsLi2, nul: n});
      }
      var data = [];
      data = dataFirstChart;

      return (
        <React.Fragment>    

          <button onClick={this.test}> button</button>

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

              <table>
                <thead>
                  <tr>
                     {commitsLi.map((x) => (
                      <th key={x}>{x}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    {/* {yesNoTableLibs.map((row, index) => (
                      <tr key={index}>
                        {commitsLi.map((x) => (
                          <td key={x}>{row[x]}</td>
                        ))}
                      </tr>
                    ))} */}
                </tbody>
              </table>
          </React.Fragment>

        );
    }
}
 
export default HistoryAnalysis;