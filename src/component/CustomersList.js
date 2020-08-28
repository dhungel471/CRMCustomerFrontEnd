import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchCustomer , deleteCustomer} from '../actions/customerAction';


function mapStateToProps(state) {
  return {
    error: state.error,
    loading: state.loading,
    customerdata: state.customerdata
  }
}
 
const mapDispatchToProps = {
  fetchCustomer,
  deleteCustomer
}

function CustomersList(props) {
  const history = useHistory();

  useEffect(() => {
    props.fetchCustomer();
  }, [])


  function handleEdit(id, customer ) {
   history.push("/api/addCustomers/"+id);
 }

 function handleDelete(id){
   props.deleteCustomer(id);
      
 }

  const noBorder = {"border-bottom":"none"}
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Edit/Delete</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
          {props.customerdata.length > 0 && props.customerdata.map((customer) => {
            return(
            <tr key={customer.id}>
              <td>
                <button className="btn btn-info" onClick={() => handleEdit(customer.id, customer)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.phoneNumber}</td>
            <td>{customer.address}</td>           
            </tr>
            );
          })}
          </tbody>
        
        </table>
    );
}

//export default CustomersList;
export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);