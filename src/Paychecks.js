import React, { useEffect, useState } from "react";
import axios from "axios";

function Paychecks({props}){
    const [btn, setBtn] = useState(0);
    const [emp, setEmployee] = useState([]);
    const paycheck = {
        empManagerID : props
    };
    const getAllEmployees = async (paycheck) => {
        await axios.post(`http://localhost:8100/payroll/allEmp`, paycheck)
        .then((res) => {
            setEmployee([...res.data]);
            console.log(emp, res);
        });
    };

    const issuePaycheck = async (request) => {
        console.log(request);
        await axios.post(`http://localhost:8100/payroll/issuePayCheck`, request)
        .then((res) => {
            console.log(emp, res);
            getAllEmployees(paycheck);
        });
    };


    const setButton = (event) => {
        let ele = event.target.value.split(" ");
        let status = "Issued"
        const request = {
            empID : emp[ele[1]].empID,
            empName : emp[ele[1]].empName,
            empManagerID : emp[ele[1]].empManagerID,
            empManager : emp[ele[1]].empManager,
            empPayStatus : status
        };
        issuePaycheck(request);
    }

    useEffect(() => {
        getAllEmployees(paycheck)
    },[]);

    return(<div>
        <h3>Paychecks</h3>

        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Manager ID</th>
                    <th>Manager Name</th>
                    <th>Paycheck Status</th>
                </tr>
            </thead>
        
            <tbody>
                {
                    emp.map((ele,index) => {
                        console.log(ele);
                        return (
                            <tr>
                                <td>{ele.empID}</td>
                                <td>{ele.empName}</td>
                                <td>{ele.empManagerID}</td>
                                <td>{ele.empManager}</td>
                                {
                                    ele.empPayStatus === "Pending" && <td><button onClick={setButton} value={`0 ${index}`}>Issue Paycheck</button></td>
                                }
                                {   ele.empPayStatus !== "Pending" && <td>{ele.empPayStatus}</td>}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>)
};

export default Paychecks;