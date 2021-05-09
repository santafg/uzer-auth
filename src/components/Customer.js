import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

const Customer = () => {

    const [customers, setCustomers] = useState([]);

    async  function getCustomers() {
        const customersDatas = await axios.get('/customer');
        setCustomers(customersDatas.data);
    }
    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <>
            <CustomerForm getCustomers={getCustomers}/>
            <CustomerList customers={customers}/>
        </>
    )
}

export default Customer
