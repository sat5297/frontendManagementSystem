import React,{useState} from "react";
import EmployeeShow from "./employeeShow";
import { ReactDOM } from "react";
import axios from "axios";
import "./style.css";
import { useLocation } from "react-router-dom";

function Employee(){
    const location = useLocation();
    console.log(location);
    const [login, setLogin]  = useState(false);
    const [empid, setEmp]    = useState(0);
    const [emp, setEmployee] = useState({});
    const [head, setHead]    = useState("Log In as Employee ");

    const callAPI = async (searchObj) => {
        await axios.post(`http://localhost:9000/employees/id`, searchObj)
        .then((res) => {
            console.log(res);
            if(res.data.length > 0){
                setLogin(true);
                setEmployee(res.data[0]);
                setHead("Logged in as Employee");
            }else{
                setEmployee({});
                setHead("Please Enter correct Employee ID");
            }
            
        });
    };

    const loginAPI = async (searchObj) => {
        await axios.post(`http://localhost:7500/login/login`, searchObj)
        .then((res) => {
            console.log(res);
            if(res.data === "Success"){
                callAPI({empID : searchObj.empID});
            }else{
                setHead("Invalid Login");
                setEmployee();
            }
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let empid = ((document.getElementsByName("empid_employeeForm")||{})[0].value)||"";
        let pass = ((document.getElementsByName("emppass_employeeForm")||{})[0].value)||"";
        const searchObj = {
            empID : empid,
            pass  : pass
        };
        loginAPI(searchObj);
    };

    return(
        <React.Fragment>
            <h1>{head}</h1>
            {!login && <form id="employeeForm" method="POST" onSubmit={onFormSubmit}>
                <label>Enter Employee Number: 
                    <input type="text" name="empid_employeeForm"/> 
                </label>
                <label>
                    Enter Password: 
                    <input type="text" name="emppass_employeeForm"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>}
            <div className="employee__data">
                {login && <EmployeeShow props={emp}/>}
            </div>
        </React.Fragment>
    );
}

export default Employee;