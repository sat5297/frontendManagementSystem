import React,{useState} from "react";
import axios from "axios";

function EditEmployee({props}){
    const [message, setMessage] = useState("");
    // const [imageFile, setImageFile] = useState(null);

    const callAPI = async (createObj) => {
        await axios.post(`http://localhost:9000/employees/update`, createObj)
        .then((res) => {
            console.log(res);
            if(res.status == 200){
                setMessage("Updated Data Successfully in Employee Database.");
                callPayrollUpdate(createObj);
            }
            else{
                setMessage("Failed to update data.");
            }
        });
    };

    // const callManagerUpdate = async (createObj) => {
    //     await axios.post(`http://localhost:8000/manager/update`, createObj)
    //     .then((res) => {
    //         if(res.status == 200){
    //             setMessage("Update Data Successfully in Corporate Database");
    //             callPayrollUpdate(createObj);
    //         }
    //         else{
    //             setMessage("Failed to update data.");
    //         }
    //     });
    // };

    const callPayrollUpdate = async (createObj) => {
        await axios.post(`http://localhost:8100/payroll/update`, createObj)
        .then((res) => {
            if(res.status == 200){
                setMessage("Update Data Successfully in Payroll Database");
            }
            else{
                setMessage("Failed to update data.");
            } 
        });
    };

    // const callAuthUpdate = async (createObj) => {
    //     await axios.post()
    //     .then((res) => {
    //         if(res.status == 200){
    //             setMessage("Update Data Successfully in Payroll Database");
    //         }else{
    //             setMessage("Failed to update data.");
    //         }
    //     });
    // };

    const submitForm = (event) => {
        event.preventDefault();
        // const fd = new FormData();
        // console.log(imageFile, imageFile.name);
        // fd.append("file", imageFile, imageFile.name);
        // console.log(fd);
        let empID = ((document.getElementsByName("empID_create")||{})[0].value)||"";
        let empName = ((document.getElementsByName("empName_create")||{})[0].value)||"";
        let empCell = ((document.getElementsByName("empCell_create")||{})[0].value)||"";
        let empAadhar = ((document.getElementsByName("empAadhar_create")||{})[0].value)||"";
        let empPan = ((document.getElementsByName("empPan_create")||{})[0].value)||"";
        let empAddress = ((document.getElementsByName("empAddress_create")||{})[0].value)||"";
        let empGender = ((document.getElementsByName("empGender_create")||{})[0].value)||"";
        let empDOB = ((document.getElementsByName("empDOB_create")||{})[0].value)||"";
        let empMail = ((document.getElementsByName("empMail_create")||{})[0].value)||"";
        let empLocation = ((document.getElementsByName("empLocation_create")||{})[0].value)||"";
        let empManager = ((document.getElementsByName("empManager_create")||{})[0].value)||"";
        let empManagerID = ((document.getElementsByName("empManagerID_create")||{})[0].value)||"";
        let empDept = ((document.getElementsByName("empDept_create")||{})[0].value)||"";
        let empDeptID = ((document.getElementsByName("empDeptID_create")||{})[0].value)||"";
        console.log(empManager, empManagerID,empDept, empDeptID);
        if(empID !== "" && empName !== "" && empCell !== "" && empLocation !== "" && empManager !== "" && empManagerID !== "" && empDept !== "" && empDeptID !== ""){
            const createObj = {empID, empName, empCell,empAadhar, empPan, empAddress, empGender, empDOB,empMail, empLocation, empManager, empManagerID, empDept, empDeptID};
            // createObj.image = {
            //     image : imageFile,
            //     name : imageFile.name
            // }
            callAPI(createObj);
        }
        else{
            alert("Please Populate all the data.");
        }
    };

    // const updateFile = (event) => {
    //     console.log(event.target.files[0]);
    //     setImageFile(event.target.files[0]);
    //     console.log(imageFile);
    // }

    return(
        <div>
            <form id="editEmployee" method="POST" onSubmit={submitForm}>
                    {/* <label>
                        Employee Image:
                        <input type="file" onChange={updateFile} />
                    </label> */}
                    <label> Employee ID :
                        <input name="empID_create" value={props.empID} readOnly/>
                    </label>
                    <label> Employee Name :
                        <input name="empName_create" value={props.empName} readOnly/>
                    </label>
                    <label> Employee Phone Number :
                        <input name="empCell_create" defaultValue={props.empCell} />
                    </label>
                    <label> Aadhaar Number :
                        <input name="empAadhar_create" defaultValue={props.empAadhar}/>
                    </label>
                    <label> PAN Number :
                        <input name="empPan_create" defaultValue={props.empPan}/>
                    </label>
                    <label> Address :
                        <input name="empAddress_create" defaultValue={props.empAddress}/>
                    </label>
                    <label> Gender :
                        <input name="empGender_create" defaultValue={props.empGender}/>
                    </label>
                    <label>DOB:
                        <input name="empDOB_create" type="date" defaultValue={props.empDOB}/>
                    </label>
                    <label> Mail :
                        <input name="empMail_create" defaultValue={props.empMail}/>
                    </label>
                    <label> Employee Location : 
                        <input name="empLocation_create" value={props.empLocation} readOnly/>
                    </label>
                    <label> Employee Manager :
                        <input name="empManager_create" value={props.empManager} readOnly/>
                    </label>
                    <label> Employee Manager ID :
                        <input name="empManagerID_create" value={props.empManagerID} readOnly/>
                    </label>
                    <label> Employee Department :
                        <input name="empDept_create" value={props.empDept} readOnly/>
                    </label>
                    <label> Employee Department ID :
                        <input name="empDeptID_create" value={props.empDeptID} readOnly/>
                        <input type="submit" value="Submit"  style={{width : "60px"}}/>
                    </label>
                </form>
                {message}
        </div>
    )
}

export default EditEmployee;