import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addCustomer, updateCustomer } from '../actions/customerAction';

function mapStateToProps(state) {
    return {
      error: state.error,
      loading: state.loading,
      customerdata: state.customerdata
    }
  }

  const mapDispatchToProps = {
    addCustomer,
    updateCustomer
  }
  
function AddCustomers(props) {
  const slug = props.match.params.id; //checks if id is present in URL, then call to Edit
  const customers = props.customerdata;
  const customer = slug && customers && customers.find(customer => customer.id === slug);
 
  const [fName, setfName] = useState(customer && customer.id ? customer.firstName : '');
  const [lName, setlName] = useState(customer && customer.id ? customer.lastName : '');
  const[phone, setPhone] = useState(customer && customer.id ? customer.phoneNumber : '');
  const [address, setAddress] = useState(customer && customer.id ? customer.address : '');
  const history = useHistory();
    
  function handleSubmit(event) {
    event.preventDefault();
    console.log(props.customerdata.firstName);
    let customers = {
        id: slug ? slug : '',
        firstName: fName,
        lastName: lName,
        phoneNumber: phone,
        address: address
    }
    slug ?  props.updateCustomer(props.customerdata.id, customers):props.addCustomer(customers);
    
    history.push("/api/customers");
    
}

  function handleCancel(event) {
    event.preventDefault();
    history.push("/api/customers");
}
    

      return (
    <div className="container">
         
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fName">First Name:</label>
          <input className="form-control" id="fname" aria-describedby="fname" placeholder="Enter First Name" value={fName} onChange={e => setfName(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="lName">Last Name:</label>
          <input className="form-control" id="lName" aria-describedby="lName" placeholder="Enter Last Name" value={lName}  onChange={e => setlName(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="phone">Phone:</label>
          <input className="form-control" id="phone" aria-describedby="phone" placeholder="Enter Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        </div>
        <div className="form-group">
        <label htmlFor="phone">Address:</label>
          <input className="form-control" id="address" aria-describedby="address" placeholder="Enter Address" value={address} onChange={e => setAddress(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-primary" style={{"marginLeft": "10px"}} onClick={handleCancel}>Cancel</button>
      </form>
    </div>
      );
    }


  export default connect(mapStateToProps, mapDispatchToProps)(AddCustomers);