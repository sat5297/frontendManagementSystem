import React, { useState } from "react";
import './style.css';
import ViewPersonalInfo from "./viewPersonalInfo";
import ViewEmployeeInfo from "./viewEmployeeInfo";
import CreateEmployee from "./createEmployee";
import LeaveRequest from "./LeaveRequest";
import Paychecks from "./Paychecks";
import Logout from "./logout";

function ManagerLogin({props}){
    const [btn, setBtn] = useState("0");

    const callAPI = (event) => {
        // console.log(event.target, event.target.value);
        setBtn(event.target.value);
    }

    return(
        <div>
            <div style={{justifyContent : "center"}}>
                <h2>Logged in as Manager. {props}</h2>
                {btn === "0" && 
                    <div style={{display : "flex", flexDirection : "row", justifyContent : "center" }}>
                        <button onClick={callAPI} value="1"> View Personal Info </button>
                        <button onClick={callAPI} value="2"> View Employee Under Me </button>
                        <button onClick={callAPI} value="3"> Add Employee </button>
                        <button onClick={callAPI} value="4"> Leave Requests </button>
                        <button onClick={callAPI} value="5"> Issue Paychecks </button>
                        <button onClick={Logout}> Logout</button>
                    </div>
                }

                <div>
                    {btn === "1" && <ViewPersonalInfo props={props}/>}
                    {btn === "2" && <ViewEmployeeInfo props={props}/>}
                    {btn === "3" && <CreateEmployee   props={props}/>}
                    {btn === "4" && <LeaveRequest     props={props}/>}
                    {btn === "5" && <Paychecks        props={props}/>}

                </div>
            </div>
        </div>
    )
}

export default ManagerLogin;