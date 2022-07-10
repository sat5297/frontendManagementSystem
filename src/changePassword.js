import React, { useState } from "react";
import axios from "axios";
import Logout from "./logout";

function ChangePassword({props}){
    const [ head, setHead ] = useState("Change Password");
    const updatePassword = async (obj) => {
        console.log(obj);
        await axios.post(`http://localhost:7500/login/update`, obj)
        .then((res) => {
            console.log(res);
            setHead("Logging Out");
            setTimeout(() => {
                Logout();
            },1900);
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let newpass = ((document.getElementsByName("newpass")||{})[0].value)||"";
        let currpass = ((document.getElementsByName("currpass")||{})[0].value)||"";
        let confirmpass = ((document.getElementsByName("confirmpass")||{})[0].value)||"";
        const obj = {
            empID: props.empID,
            currpass ,
            confirmpass
        }
        if(newpass !== confirmpass){
            alert("The passwords do not match.");
        }else{
            updatePassword(obj);
        }
    };

    return(
        <div>
            <h4>{head}</h4>
            <form id="changePassword" method="POST" onSubmit={onFormSubmit}>
                <label>
                    Enter Current Password:
                    <input type="password" name="currpass" />
                </label>    
                <label>
                    Enter Password:
                    <input type="password" name="newpass" />
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmpass" />
                    <input type="submit" value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default ChangePassword;