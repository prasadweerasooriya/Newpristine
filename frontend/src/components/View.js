import React, { Component } from 'react';
import { Table,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
class View extends Component {

    constructor(props){
        super(props);
  
           this.state={
             customerDetails:[]
           }
      }

      componentDidMount(){
        fetch(`http://localhost:4000/customerlist`)
        .then(response=>response.json())
        .then(res =>{
            
          if(Array.isArray(res.data)){
            this.setState({customerDetails: res.data},
              ()=>console.log(this.state.customerDetails))
  
            }
            
          })
  
      }
   
    render() {

        const {customerDetails}= this.state;
        const cusDetailList =customerDetails && customerDetails.map((cuslist)=>{
          return <tr key={cuslist.id}>
          
          <td>{cuslist.firstname}</td>
          <td>{cuslist.lastname}</td>
          <td>{cuslist.email}</td>
          <td>{cuslist.mobile}</td>
          <td><Button size="sm" color="primary" tag={Link} to={"/customer/profile/" + cuslist.id}>view</Button></td>
        
       </tr>
        });

        return (
            <div>
      <div className="card-header" style={{ height: '5rem', backgroundColor: "#08bbcf" }}>
        <h3 className="text-white  mb-3" align="center" style={{ marginTop: '1rem' }}>Customers view</h3>
              
      </div>
      <div className="container-fluid">
     <div className="table-wrapper-scroll-y scrollbar">
      <Table>
      <thead>
        <tr>
        <th width="20%">First Name</th>
        <th width="20%">Last Name</th>
        <th width="20%">Email</th>
        <th width="20%">Mobile</th>
        <th width="15%">Profile</th>
        </tr>
      </thead>
         <tbody> 
         {cusDetailList}
         </tbody>
      </Table>
      </div>
      </div>
      </div>
        )
    }
}

export default View