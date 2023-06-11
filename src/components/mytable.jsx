import React, { Component } from 'react';
import Table from 'rc-table';
import { HiArrowRightCircle } from 'react-icons/hi2';



class MyTable extends Component {
  constructor(props){
    super(props);
  }
   
    onClick =(key)=>{
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
              title: 'PUCD',
              dataIndex: 'pucd',
              key: 'pucd',
              width: 200,
            },
            {
              title: 'PUCI',
              dataIndex: 'puci',
              key: 'puci',
              width: 200,
            },
            {
              title: 'LDUF',
              dataIndex: 'lduf',
              key: 'lduf',
              width: 200,
            },
            {
              title: 'LIUF',
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
                <h3 id='metricNul'> Number of used libraries: {this.props.nul} </h3>
                
                <Table columns={columns} data={this.props.data} />
               
              </div>
                   
          </React.Fragment>
        );
    }
}
 
export default MyTable;