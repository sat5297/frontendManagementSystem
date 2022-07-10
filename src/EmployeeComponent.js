import React from "react";
import { ReactDOM } from "react";
import "./style.css";

function EmployeeComponent({key,props}){
    
    return(
        <tr key={key}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.manager}</td>
            <td>{props.department}</td>
            <td>{props.location}</td>
        </tr>
    );
}

export default EmployeeComponent;