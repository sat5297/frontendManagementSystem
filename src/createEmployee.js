import React,{useEffect, useState} from "react";
import { ReactDOM } from "react";
import axios from "axios";

function CreateEmployee({props}){
    console.log(props);
    const [manager, setManager] = useState({});
    const [message, setMessage] = useState("");

    const callManagerAPI = async(empID) => {
        await axios.post(`http://localhost:9000/employees/id`, empID)
        .then((res) => {
            setManager(res.data[0])
        });
    };

    const callAddEmp = async (createObj) => {
        await axios.post(`http://localhost:9000/employees/add`, createObj)
        .then((res) => {
            console.log(res);
            setMessage(res.data);
        });
    };

    const callRegister = async (createObj) => {
        await axios.post(`http://localhost:7500/login/register`, createObj)
        .then((res) => {
            console.log(res);
            setMessage(res.data);
        })
    };

    const callAPI = async (createObj) => {
        console.log(createObj);
        await axios.post(`http://localhost:8000/manager/addEmployee`, createObj)
        .then((res) => {
            console.log(res);
            createObj.pass = createObj.empID;
            callAddEmp(createObj);
            callRegister(createObj);
            setMessage(res.data);
        });
    };

    useEffect(()=>{
        callManagerAPI({empID : props});
    },[]);

    const submitForm = (event) => {
        event.preventDefault();
        let empID = ((document.getElementsByName("empID_create")||{})[0].value)||"";
        let empName = ((document.getElementsByName("empName_create")||{})[0].value)||"";
        let empCell = ((document.getElementsByName("empCell_create")||{})[0].value)||"";
        let empLocation = ((document.getElementsByName("empLocation_create")||{})[0].value)||"";
        let empManager = ((document.getElementsByName("empManager_create")||{})[0].value)||"";
        let empManagerID = ((document.getElementsByName("empManagerID_create")||{})[0].value)||"";
        let empDept = ((document.getElementsByName("empDept_create")||{})[0].value)||"";
        let empDeptID = ((document.getElementsByName("empDeptID_create")||{})[0].value)||"";
        console.log(empManager, empManagerID,empDept, empDeptID);
        if(empID !== "" && empName !== "" && empCell !== "" && empLocation !== "" && empManager !== "" && empManagerID !== "" && empDept !== "" && empDeptID !== ""){
            const createObj = {empID, empName, empCell, empLocation, empManager, empManagerID, empDept, empDeptID};
            callAPI(createObj);
        }
        else{
            alert("Please Populate all the data.");
        }
    };

    return(
        <div>
            <h2>creating employee </h2>
            <div>
                <form id="createEmployee" method="POST" onSubmit={submitForm} >
                    <label> Employee ID :
                        <input name="empID_create" />
                    </label>
                    <label> Employee Name :
                        <input name="empName_create"/>
                    </label>
                    <label> Employee Phone Number :
                        <input name="empCell_create"/>
                    </label>
                    <label> Employee Location : 
                        <input name="empLocation_create"/>
                    </label>
                    <label> Employee Manager :
                        <input name="empManager_create" />
                    </label>
                    <label> Employee Manager ID :
                        <input name="empManagerID_create" value={props} readOnly/>
                    </label>
                    <label> Employee Department :
                        <input name="empDept_create"/>
                    </label>
                    <label> Employee Department ID :
                        <input name="empDeptID_create"/>
                        <input type="submit" value="Submit" style={{width : "60px"}}/>
                    </label>
                </form>
            </div>
            {message}
        </div>
    );
}

export default CreateEmployee;