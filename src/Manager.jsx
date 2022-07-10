import React, { useState } from "react";
import './style.css';
import axios from "axios";
import ManagerLogin from "./managerLogin";

function Manager(){
    const [head, setHead]    = useState("Log In as Manager");
    const [login, setLogin]  = useState(false);
    const [empid, setEmp]    = useState(0);

    const loginAPI = async (searchObj) => {
        await axios.post(`http://localhost:7500/login/login`, searchObj)
        .then((res) => {
            console.log(res);
            if(res.data === "Success"){
                setHead("Logged in as Manager");
                setLogin(true);
                setEmp(searchObj.empID);
            }else{
                setHead("Invalid Login");
                setEmp();
            }
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let empID = document.getElementsByName("managerId")[0].value;
        let pass = document.getElementsByName("managerPass")[0].value;
        const searchObj = {
            empID : empID,
            pass  : pass
        };
        loginAPI(searchObj);
    };

    return(
        <div style={{justifyContent : "center"}}>
            {!login && <div>
                    <h2> {head}</h2>
                    <form id="managerForm" method="POST" onSubmit={onFormSubmit}>
                        <label> Enter Manager ID:
                            <input type="text" name="managerId"/>
                        </label>
                        <label>
                            Enter Password:
                            <input type="text" name="managerPass"/>
                            <input type="submit" name="Submit" value="Submit"/>
                        </label>
                    </form>
                </div>}
            {login && <ManagerLogin props={empid} />}
        </div>
    );
}

export default Manager;