import React, { Component } from 'react'
import axios from 'axios';

class Customerprofileview extends Component {

    constructor(props){
        super(props);
  
           this.state={
            customerDetails:{},
             
           }
      }
      componentDidMount(){
        console.log(this.props.match.params.idcustomer)
        fetch(`http://localhost:4000/viewCustomer/` + this.props.match.params.idcustomer)
      .then(response=>response.json())
      .then(res =>{
          
        if(Array.isArray(res.data)){
          this.setState({customerDetails: res.data[0]},
            ()=>console.log(this.state.customerDetails))

          }
          
        })

    }

    render () {
        return (
            <div  class="card-body text-dark" style={{width: '50rem',height:'37rem',backgroundColor:"#dcfcfc",marginLeft:"20rem"}}>
            <div align="center">
                <form  >
                    <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" id="firstname" name="firstname" value={this.state.customerDetails.firstname}  />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control" id="lastname" name="lastname"  value={this.state.customerDetails.lastname}  />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="emai" id="email" name="email" value={this.state.customerDetails.email}  />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input className="form-control" id="address" name="address"   value={this.state.customerDetails.address}  />
                           
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input className="form-control"  type="date"  id="birthday" name="birthday"  value={this.state.customerDetails.birthday}  />
                    </div>                  
                </form>  
                </div>
            </div>
        )
    }
}

export default Customerprofileview