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

    render() {
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

        //table
        const columns = [
            {
              title: 'Library',
              dataIndex: 'library',
              key: 'library',
              width: 100,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
              width: 100,
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              width: 200,
            },
            {
              title: 'Operations',
              dataIndex: '',
              key: 'operations',
              render: () => <a href="#">Library</a>,
            },
          ];
          const data2 = [
            { name: 'Jack', age: 28, address: 'some where', key: '1' },
            { name: 'Rose', age: 36, address: 'some where', key: '2' },
          ];

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

                <Table columns={columns} data={data2} />
            </React.Fragment>

        );
    }
}
 
export default HistoryAnalysis;