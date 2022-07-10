import React, { useState } from "react";
import { Link } from "react-router-dom";
import Leave from "./Leave";
import MyLeaves from "./MyLeaves";
import EditEmployee from "./editEmployee";
import ChangePassword from "./changePassword";
import Logout from "./logout";

function EmployeeShow({props}){
    console.log(props);
    const [ leavePage, setLeavePage ] = useState(false);
    const [ btn, setBtn ] = useState(0);
    
    const btnClick = (event) =>{
        console.log(event.target.value);
        setLeavePage(true);
        setBtn(event.target.value);
    };

    return(
        <div>
            {leavePage === false && btn == 0 && 
            <div style={{display:"flex", flexDirection : "row", justifyContent:"center"}}>
                <div style={{display:"flex", flexDirection : "column", justifyContent:"left"}}>
                    <h6>{`Employee ID : ${props.empID}`}</h6>
                    <h6>{`Employee Name : ${props.empName}`}</h6>
                    <h6>{`Aadhar Number : ${props.empAadhar}`}</h6>
                    <h6>{`PAN Number : ${props.empPan}`}</h6>
                    <h6>{`Address : ${props.empAddress}`}</h6>
                </div>
                <div style={{display:"flex", flexDirection : "column", justifyContent:"center"}}>
                    <h6>{`Date of Birth : ${props.empDOB}`}</h6>  
                    <h6>{`Gender : ${props.empGender}`}</h6>
                    <h6>{`Manger : ${props.empManager}`}</h6>
                    <h6>{`Manager ID : ${props.empManagerID}`}</h6>
                    <h6>{`Department ID : ${props.empDeptID}`}</h6>
                </div>
                <div style={{display:"flex", flexDirection : "column", justifyContent:"right"}}>
                    <h6>{`Location : ${props.empLocation}`}</h6>
                    <h6>{`Department : ${props.empDept}`}</h6>
                    <h6>{`Phone Number : ${props.empCell}`}</h6>
                    <h6>{`Mail : ${props.empMail}`}</h6>
                </div>
            </div>}
            {/* <div>
                <h6>{props.empID}</h6>
                <h6>{props.empName}</h6>
                <h6>{props.empAadhar}</h6>
                <h6>{props.empPan}</h6>
                <h6>{props.empDOB}</h6>
                <h6>{props.empAddress}</h6>
                <h6>{props.empGender}</h6>
                <h6>{props.empManager}</h6>
                <h6>{props.empManagerID}</h6>
                <h6>{props.empDept}</h6>
                <h6>{props.empDeptID}</h6>
                <h6>{props.empLocation}</h6>
                <h6>{props.empCell}</h6>
                <h6>{props.empMail}</h6>
            </div> */}
            {
                props.empName && leavePage === false && 
                <div style={{margin:"10px", padding:"10px"}}>   
                    <button type="button" onClick={btnClick} value="1"> Apply Leave </button> 
                    <button type="button" onClick={btnClick} value="2"> My Leaves</button>
                    <button type="button" onClick={btnClick} value="3"> Edit Info</button>
                    <button type="button" onClick={btnClick} value="4"> Change Password</button>
                    <button type="button" onClick={Logout} value="5"> Logout</button>
                </div>
            }
            {
                leavePage === true && btn == 1 &&
                <Leave props={props}/>
            }
            {
                leavePage === true && btn == 2 &&
                <MyLeaves props={props}/>
            }
            {
                leavePage === true && btn == 3 && 
                <EditEmployee props={props}/>
            }
            {
                leavePage === true && btn == 4 &&
                <ChangePassword props={props}/>
            }
        </div>
    );
}

export default EmployeeShow;