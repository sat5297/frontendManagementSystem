import React,{useState, useEffect} from "react";
import { ReactDOM } from "react";
import axios from "axios";
import "./style.css";
import EditEmployee from "./editEmployee";

function ViewEmployeeInfo({props}){

    const [emp, setEmployee] = useState([]);

    const searchObj = {
        empmanagerid : props
    };

    const deleteFromAll = async (deleteObj) => {
        await axios.post(`http://localhost:9000/employees/delete`, deleteObj)
        .then((res) => {
            console.log(res.data);
        });
    };

    const deleteFromAuth = async (deleteObj) => {
        await axios.post(`http://localhost:7500/login/delete`, deleteObj)
        .then((res) => {
            console.log(res.data);
        });
    };

    const deleteFromPayroll = async (deleteObj) => {
        await axios.post(`http://localhost:8100/payroll/delete`, deleteObj)
        .then((res) => {
            console.log(res.data);
        });
    };

    const deleteFromLeaves = async (deleteObj) => {
        await axios.post(`http://localhost:7000/leaves/delete`, deleteObj)
        .then((res) => {
            console.log(res.data);
        });
    };

    const deleteFromManager = async (deleteObj) => {
        await axios.post(`http://localhost:8000/manager/delete`, deleteObj)
        .then((res) => {
            deleteFromAll(deleteObj);
            deleteFromAuth(deleteObj);
            deleteFromPayroll(deleteObj);
            deleteFromLeaves(deleteObj);
            callAPI(searchObj);
        });
    };

    const callAPI = async (searchObj) => {
        await axios.post(`http://localhost:8000/manager/viewEmployee`, searchObj)
        .then((res) => {
            setEmployee(res.data);
        });
    };

    const DeleteAPI = (event) => {
        let index = event.target.value;
        console.log(emp[index].empID);
        deleteFromManager({empID : emp[index].empID});
    };

    const EditAPI = (event) => {
        return <EditEmployee props={emp[event.target.value]}></EditEmployee>
        let index = event.target.value;
        console.log(emp[index]);
    };

    useEffect(()=>{
        callAPI(searchObj);
    },[]);

    return(
        <div style={{justifyContent:"center", textAlign: "center", margin:"100px"}}>
            <h4>Viewing Employee Under You</h4>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Manager</th>
                        <th>Employee Manager ID</th>
                        <th>Department</th>
                        <th>Department ID</th>
                        <th>Location</th>
                        <th>Phone </th>
                        <th>Operations </th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map((ele,index) => {
                        return (
                            <tr>
                                <td>{ele.empID}</td>
                                <td>{ele.empName}</td>
                                <td>{ele.empManager}</td>
                                <td>{ele.empManagerID}</td>
                                <td>{ele.empDept}</td>
                                <td>{ele.empDeptID}</td>
                                <td>{ele.empLocation}</td>
                                <td>{ele.empCell}</td>
                                <td>
                                    {/* <button onClick={EditAPI} value={index}>Edit</button>  */}
                                    <button onClick={DeleteAPI} value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>    
            </table>
        </div>
    );
}

export default ViewEmployeeInfo;