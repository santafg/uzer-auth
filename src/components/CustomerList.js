import React from "react";

function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer, i) => {
      return <li key={i}>{customer.name} </li>;
    });
  }

  return (
    <>
      <ul>{renderCustomers()}</ul>
    </>
  );
}

export default CustomerList;
