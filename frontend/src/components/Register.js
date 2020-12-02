import React, { Component } from 'react'
import {Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';

class Register extends Component {

constructor(){
  super();
  this.state = {
    firstname: "",
    lastname: "" ,
    email:"",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    mobile: "",
    birthday: ""
  }
  this.onChangeValues = this.onChangeValues.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
        
}

onChangeValues(e) {
  this.setState({ [e.target.id]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  const customerDetails ={
    firstname: this.state.firstname,
    lastname: this.state.lastname,
    email: this.state.email,
    address: this.state.address,
    city: this.state.city,
    state : this.state.state,
    zipcode: this.state.zipcode,
    phone: this.state.phone,
    mobile: this.state.mobile,
    birthday: this.state.birthday
  } 
  axios.post('http://localhost:4000/customer',customerDetails)
      .then((response) => {
        console.log(customerDetails);
          console.log(response);
          if (response.data.code === 200) {
              console.log("success")
             
          }
          else {
             console.log("error")
          }
      });

  this.setState({
    firstname: "",
    lastname: "" ,
    email:"",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    mobile: "",
    birthday: ""
  })
}

    render () {
        return (
            <div>
               <div> 
                <Card>
                    <Card.Header as="h2" align="center" style={{ backgroundColor: "white", color: "black"  }}>CUSTOMER CONTACT INFORMATION</Card.Header>
                </Card>
               </div>
               <div className="container" style={{ marginTop: '8vh', marginLeft: "7rem" }}>
               <div class="card-body text-dark" style={{ width: '80rem', height: '20rem', backgroundColor: "#fcf8dc" }}>
               <div>
                   <h3>BASIC INFORMATION</h3>
                <form>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>First Name</label>
                    </div>
                    <div class=" col-sm-10 ">
                     <input className="form-control" id="firstname" name="firstname" value={this.state.firstname} onChange={this.onChangeValues} />
                    </div>
                  </div>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>Last Name</label>
                    </div>
                    <div class=" col-sm-10 ">
                     <input className="form-control" id="lastname" name="lastname" value={this.state.lastname} onChange={this.onChangeValues} />
                    </div>
                  </div>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>Email</label>
                    </div>
                    <div class=" col-sm-10 ">
                     <input className="form-control" type="email" id="email" name="email" value={this.state.email} onChange={this.onChangeValues} />
                    </div>
                  </div>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>Address</label>
                    </div>
                    <div class=" col-sm-10 ">
                     <input className="form-control" id="address" name="address" value={this.state.address} onChange={this.onChangeValues} />
                    </div>
                  </div>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>City</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" id="city" name="city" value={this.state.city} onChange={this.onChangeValues}  />
                    </div>
                    <div class=" col-sm-2 ">
                     <label>State</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" id="state" name="state" value={this.state.state} onChange={this.onChangeValues} />
                    </div>
                    <div class=" col-sm-2 ">
                     <label>Zip Code</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" id="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.onChangeValues} />
                    </div>
                  </div>
                  <div className="container-fluid row">
                    <div class=" col-sm-2 ">
                     <label>Phone</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.onChangeValues} />
                    </div>
                    <div class=" col-sm-2 ">
                     <label>Mobile</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" id="mobile" name="mobile" value={this.state.mobile} onChange={this.onChangeValues} />
                    </div>
                    <div class=" col-sm-2 ">
                     <label>Birthday</label>
                    </div>
                    <div class=" col-sm-2 ">
                     <input className="form-control" type="date"  id="birthday" name="birthday" value={this.state.birthday} onChange={this.onChangeValues} />
                    </div>
                  </div>
                </form>
                </div>
              </div> 
            </div>
            <div class="container-fluid row">
                <div class="col-sm-10">
                </div>
                <div class="col-sm-2" > 
                  <button onClick={this.onSubmit} type="button" class="btn btn-outline-warning" style={{width:'8.5rem'}} >Submit</button>
                </div>
            </div>
          </div> 
        )
    }
}

export default Register