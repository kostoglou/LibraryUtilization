import React, { Component } from 'react';
import Table from 'rc-table';
import { HiArrowRightCircle } from 'react-icons/hi2';
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
        var commitsLi=['name'];
        var uniqueLibs=[];
        var libsSha=[];
        var sha="";
        for(var i=0;i<this.props.comm; i++){
          var v=i+1;
          commitsLi.push('v'+v);
          var lib="";
          sha = this.props.comm.sha;
          for(var j=0;j<this.props.data[i].dataProjectVersion;j++){
            lib = this.props.data[i].dataProjectVersion[j].lib;
            if(!uniqueLibs.includes(lib)){
              uniqueLibs.push(lib);
            }
            libsSha.push({sha: sha, lib: lib});
          }
        }
        
        var yesNoTableLibs=[];
        var shaYes=[];
        for(var i=0; i<uniqueLibs; i++){
          for(var j=0; j<libsSha; j++){
            var l = libsSha[j].lib;
            var s = libsSha[j].sha;
            if(uniqueLibs[i]==l){
              shaYes.push(s);
            }
          }
          yesNoTableLibs.push(uniqueLibs[i], ...shaYes);
        }


        //first chart
        const data = [
            {
              name: "Page A",
              uv: 4000,
              pv: 2400,
              amt: 2400
            },
            {
              name: "Page B",
              uv: 3000,
              pv: 1398,
              amt: 2210
            },
            {
              name: "Page C",
              uv: 2000,
              pv: 9800,
              amt: 2290
            },
            {
              name: "Page D",
              uv: 2780,
              pv: 3908,
              amt: 2000
            },
            {
              name: "Page E",
              uv: 1890,
              pv: 4800,
              amt: 2181
            },
            {
              name: "Page F",
              uv: 2390,
              pv: 3800,
              amt: 2500
            },
            {
              name: "Page G",
              uv: 3490,
              pv: 4300,
              amt: 2100
            }
          ];
          

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
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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
                    {yesNoTableLibs.map((row, index) => (
                      <tr key={row}>{row.map((x) => (
                          <td key={x}>{row[x]}</td> ))}
                      </tr>
                    ))} 
                  </tbody>
                </table>
            </React.Fragment>

        );
    }
}
 
export default HistoryAnalysis;