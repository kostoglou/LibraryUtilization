import React, { Component } from 'react';
import Table from 'rc-table';
import { HiArrowRightCircle } from 'react-icons/hi2';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';



class MyTable extends Component {
  constructor(props){
    super(props);
  }
   
    onClick =(key,e)=>{
      console.log("key: "+key);
      this.props.onclickoftableoflibrary(key); 
     
    }

    render() { 
        const columns = [
            {
              title: 'Library',
              dataIndex: 'library',
              key: 'library',
              width: 200,
            },
            {
              title: 'Metric 1',
              dataIndex: 'pucd',
              key: 'pucd',
              width: 200,
            },
            {
              title: 'Metric 2',
              dataIndex: 'puci',
              key: 'puci',
              width: 200,
            },
            {
              title: 'Metric 3',
              dataIndex: 'lduf',
              key: 'lduf',
              width: 200,
            },
            {
              title: 'Metric 3',
              dataIndex: 'liuf',
              key: 'liuf',
              width: 200,
            },
            {
              title: 'Operations',
              dataIndex: '',
              key: 'd',
              render: (text, record) => (
                <button className="investigate" onClick={e => this.onClick(record.library, e)} href="#">
                  investigate <span><HiArrowRightCircle /></span>
                </button>
              ),
            },
          ];

        return (
          <React.Fragment>
          
              <div class="table">
                <h3 id='metricNul'> {this.props.nul} </h3>
                
                <Table columns={columns} data={this.props.data} />
               
              </div>
                   
          </React.Fragment>
        );
    }
}
 
export default MyTable;