import React, { useState } from "react";
import axios from "axios";

function CustomerForm({getCustomers}) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
      e.preventDefault();
      try {
          const customerData = {
              name:customerName
          }
          await axios.post('/customer' , customerData);
          // window.alert(`${customerName}  is added`);
          setCustomerName('');
          getCustomers();
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
        />
        <button type="submit" >Add a Customer</button>
      </form>
    </>
  );
}

export default CustomerForm;
