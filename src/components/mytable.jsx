import React, { Component } from 'react';
import Table from 'rc-table';

class MyTable extends Component {
  constructor(props){
    super(props);
  }
   
    onClick =(key,e)=>{
      console.log("key: "+key);
    this.props.onclickoftableoflibrary();
     
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
              dataIndex: 'metric1',
              key: 'metric1',
              width: 200,
            },
            {
              title: 'Metric 2',
              dataIndex: 'metric2',
              key: 'metric2',
              width: 200,
            },
            {
              title: 'Metric 3',
              dataIndex: 'metric3',
              key: 'metric3',
              width: 200,
            },
            {
              title: 'Operations',
              dataIndex: '',
              key: 'd',
              render: (text, record) => (
                <button onClick={e => this.onClick(record.library, e)} href="#">
                  investigate
                </button>
              ),
            },
          ];

          


        return (
          <React.Fragment>
            <Table columns={columns} data={this.props.data} />     
            <button onClick={this.props.onbackclick}>Back</button>
            
            
          </React.Fragment>
        );
    }
}
 
export default MyTable;