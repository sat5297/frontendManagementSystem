import React,{useEffect, useState} from "react";
import { ReactDOM } from "react";
import axios from "axios";

function ViewPersonalInfo({props}){
    const [emp, setEmployee] = useState([]);

    const searchObj = {
        empID : props
    };

    const callAPI = async (searchObj) => {
        await axios.post(`http://localhost:9000/employees/id`, searchObj)
        .then((res) => {
            setEmployee(res.data[0]);
            console.log(res.data);
        });
    };

    useEffect(()=>{
        callAPI(searchObj);
    },[]);

    return(
        <div>
            <h2>Your Personal Information.</h2>
            <div style={{display:"flex", flexDirection : "row", justifyContent:"center", margin:"5px"}}>
                <h6>{emp.empID}</h6>
                <h6>{emp.empName}</h6>
                <h6>{emp.empAadhar}</h6>
                <h6>{emp.empPan}</h6>
                <h6>{emp.empDOB}</h6>
                <h6>{emp.empAddress}</h6>
                <h6>{emp.empGender}</h6>
                <h6>{emp.empManager}</h6>
                <h6>{emp.empManagerID}</h6>
                <h6>{emp.empDept}</h6>
                <h6>{emp.empDeptID}</h6>
                <h6>{emp.empLocation}</h6>
                <h6>{emp.empCell}</h6>
                <h6>{emp.empMail}</h6>
            </div>
        </div>
    );
}

export default ViewPersonalInfo;