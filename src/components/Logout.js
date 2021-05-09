import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthContext from "../context/AuthContext";

function Logout() {

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function logout() {
        await axios.get("https://uzer-auth.herokuapp.com/auth/logout");
        getLoggedIn();
        history.push('/login');
    }

    return (
        <>
            <h1>Are you willing to Logout</h1>
            <button onClick={logout}>
                Logout
            </button>
        </>
    )
}

export default Logout
