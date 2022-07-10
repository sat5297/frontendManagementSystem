import React, { useEffect, useState } from "react";
import axios from "axios";

function MyLeaves({props}){
    const [leaveSummary, setLeaveSummary] = useState([]);

    const callAPI = async (empID) => {
        console.log(empID)
        await axios.post(`http://localhost:7000/leaves/request`, empID)
        .then((res) => {
            // res.data.forEach((ele) => {
            //     const obj = {
            //         empId : ele.empID,
            //         empName : ele.empName
            //     }; 
            // });
            setLeaveSummary([...res.data]);
            // setLeaveSummary(res.data);
            console.log(leaveSummary, res);
        });
    }

    useEffect(() => {
        callAPI({empID : props.empID});
    },[]);

    return(
        <div style={{justifyContent:"center", textAlign: "center", margin:"100px"}}>
            My Leaves
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Manager ID</th>
                        <th>Manager Name</th>
                        <th>Leave Start Date</th>
                        <th>Leave End Date</th>
                        <th>Leave Duration</th>
                        <th>Leave Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    leaveSummary.map((leave) => {
                        console.log(leave);
                        return (
                                <tr>
                                    <td>{leave.empID}</td>
                                    <td>{leave.empName}</td>
                                    <td>{leave.empManagerID}</td>
                                    <td>{leave.empManager}</td>
                                    <td>{leave.startDate}</td>
                                    <td>{leave.endDate}</td>
                                    <td>{leave.duration}</td>
                                    <td>{leave.status}</td>
                                </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

export default MyLeaves;