import React,{useState} from "react";
import axios from "axios";
import "./style.css";
import EmployeeComponent from "./EmployeeComponent";

function AllEmployee(){
    const [allEmp, setEmployee] = useState([]);

    const callAPI = async (searchObj) => {
        await axios.post(`http://localhost:9000/employees/all`, searchObj)
        .then((res) => {
            console.log(res);
            res.data.forEach((ele) => {
                const obj = {
                    name : ele.empName,
                    id   : ele.empID,
                    manager : ele.empManager,
                    department : ele.empDept,
                    location : ele.empLocation,
                    email : ele.empMail
                };
                setEmployee(allEmp => [...allEmp, obj]);
            });
        });
    };

    const onFormSubmit = (event) => {
        setEmployee([])
        event.preventDefault();
        let empID = ((document.getElementsByName("empid_all")||{})[0].value)||"";
        let empName = ((document.getElementsByName("empname_all")||{})[0].value)||"";
        let empManager = ((document.getElementsByName("empmanager_all")||{})[0].value)||"";
        let empDept = ((document.getElementsByName("empdept_all")||{})[0].value)||"";
        let empLocation = ((document.getElementsByName("emploc_all")||{})[0].value)||"";
        let searchObj = {
            empID,
            empName,
            empManager,
            empDept,
            empLocation
        };
        callAPI(searchObj);
    }

    return(
        <div style={{justifyContent:"center"}}>
            <h4> ALL Employees Data </h4>
            <form id="all" method="POST" onSubmit={onFormSubmit}>
                <label>Employee Id: <input type="text" name="empid_all"/>
                </label>
                <label> 
                    Name: <input type="text" name="empname_all"/>
                </label>
                <label> 
                    Manager: <input type="text" name="empmanager_all"/>
                </label>
                <label> 
                    Department: <input type="text" name="empdept_all"/>
                </label>
                <label> 
                    Location: <input type="text" name="emploc_all"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
                 
            </form>
            <div style={{justifyContent:"center", textAlign: "center", margin:"100px"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Manager</th>
                            <th>Department</th>
                            <th>Location</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allEmp.map((emp,index) => {
                            return (<EmployeeComponent key={index} props={emp} />);
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default AllEmployee;