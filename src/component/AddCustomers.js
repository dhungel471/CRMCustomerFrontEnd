import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addCustomer } from '../actions/customerAction';


function mapStateToProps(state) {
    return {
      error: state.error,
      loading: state.loading,
      customerdata: state.customerdata
    }
  }

  const mapDispatchToProps = {
    addCustomer
  }
  
  function AddCustomers(props) {
    const fNameInput = useRef(null);
    const lNameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const addressInput = useRef(null);
    const history = useHistory();
    
    function handleSubmit(event) {
     event.preventDefault();
      let customers = {
          firstName: fNameInput.current.value,
          lastName: lNameInput.current.value,
          phoneNumber: phoneInput.current.value,
          address: addressInput.current.value
      }
      props.addCustomer(customers);
      history.push("/api/customers");
      
  }

  function handleCancel(event) {
    event.preventDefault();
     history.push("/api/customers");
     
 }
    // useEffect(() => {
    //   props.history.push("/api/books");
    // }, []) 


      return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fName">First Name:</label>
          <input className="form-control" id="fname" aria-describedby="fname" placeholder="Enter First Name" ref={fNameInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="lName">Last Name:</label>
          <input className="form-control" id="lName" aria-describedby="lName" placeholder="Enter Last Name"  ref={lNameInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="phone">Phone:</label>
          <input className="form-control" id="phone" aria-describedby="phone" placeholder="Enter Phone" ref={phoneInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="phone">Address:</label>
          <input className="form-control" id="address" aria-describedby="address" placeholder="Enter Address" ref={addressInput}/>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={handleCancel}>Cancel</button>
      </form>
    </div>
      );
    }


  export default connect(mapStateToProps, mapDispatchToProps)(AddCustomers);