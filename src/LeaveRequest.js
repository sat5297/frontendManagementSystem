import React, { useEffect, useState } from "react";
import axios from "axios";

function LeaveRequest({props}) {
    const [ leaveRequest, setLeaveRequest ] = useState([]);
    const [btn, setBtn] = useState(0);

    const callAPI = async (request) => {
        //console.log(request)
        await axios.post(`http://localhost:7000/leaves/request`, request)
        .then((res) => {
            setLeaveRequest([...res.data]);
        });
    };

    const resolveLeave = async (request) => {
        await axios.post(`http://localhost:7000/leaves/approve`, request)
        .then((res) => {
            callAPI({empManagerID : props});
        });
    };

    const setButton = (event) => {
        let ele = event.target.value.split(" ");
        // console.log(event.target.value, ele);
        // console.log(leaveRequest[ele[1]]);
        let status = ele[0] === "0" ? "Approved" : "Rejected";
        setBtn(ele[1]);
        const request = {
            empID : leaveRequest[ele[1]].empID,
            empManagerID : leaveRequest[ele[1]].empManagerID,
            startDate : leaveRequest[ele[1]].startDate,
            endDate : leaveRequest[ele[1]].endDate,
            duration : leaveRequest[ele[1]].duration,
            status : status
        };
        resolveLeave(request);
    };

    useEffect(() => {
        callAPI({empManagerID : props});
    },[]);

    return(
        <div style={{justifyContent:"center", textAlign: "center", margin:"100px"}}>
            <h3>Pending Leave Requests</h3>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Manager</th>
                        <th>Employee Manager ID</th>
                        <th>Leave Start Date</th>
                        <th>Leave End Date</th>
                        <th>Leave Duration</th>
                        <th>Leave Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaveRequest.map((ele,index) => {
                            return (
                                    <tr>
                                        <td>{ele.empID}</td>
                                        <td>{ele.empName}</td>
                                        <td>{ele.empManager}</td>
                                        <td>{ele.empManagerID}</td>
                                        <td>{ele.startDate}</td>
                                        <td>{ele.endDate}</td>
                                        <td>{ele.duration}</td>
                                        {
                                            ele.status === "Pending" && <td><button onClick={setButton} value={`0 ${index}`}>Approve</button> <button onClick={setButton} value={`1 ${index}`}>Reject</button></td>
                                        }
                                        {   ele.status !== "Pending" && <td>{ele.status}</td>}
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};

export default LeaveRequest;