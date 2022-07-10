import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function Leave({props}){
    console.log(props);
    const [message, setMessage] = useState("");

    const callAPI = async (leaveRequest) => {
        console.log(leaveRequest)
        await axios.post(`http://localhost:7000/leaves/apply`, leaveRequest)
        .then((res) => {
            console.log(res);
            setMessage(res.data);
        });
    };

    const LeaveSubmit = (event) => {
        event.preventDefault();
        let start_date = ((document.getElementsByName("start_date")||{})[0].value)||"";
        let end_date   = ((document.getElementsByName("end_date")||{})[0].value)||"";
        let duration   = ((document.getElementsByName("duration")||{})[0].value)||"";
        let leaveRequest = {
            empID : props.empID,
            empName : props.empName,
            empManagerID : props.empManagerID,
            empManager : props.empManager,
            startDate : start_date,
            endDate : end_date,
            duration,
            status : "Pending"
        };
        callAPI(leaveRequest);
    }

    return(
        <div>
            <form id="leave_form" method="POST" onSubmit={LeaveSubmit}>
                    <label > Enter Start Date: 
                        <input type="date" name="start_date"/>
                    </label>
                    <label> Enter End Date: 
                        <input type="date" name="end_date"/>
                    </label>
                    <label> Enter Duration: 
                        <input type="text" name="duration"/>
                        <input type="submit" name="submit" value="Submit"/>
                    </label>
            </form>
            {message}
        </div>
    )
}

export default Leave;