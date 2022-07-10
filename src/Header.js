import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Header(){
    return(
            <div>
                {/* <div style={{display : "flex", flexDirection : "row", justifyContent : "center"}}> */}
                <nav> 
                    <Link exact to={{pathname: '/employee', props : "hello"}} style={{color: "black"}} className="heading_style">
                        Employee Login
                    </Link>

                    <Link exact to='/manager' style={{color: "red"}} className="heading_style"> 
                        Manager Login 
                    </Link>

                    <Link exact to='/allEmployee' style={{color : "royalblue"}} className="heading_style">
                        All Employee
                    </Link>
                </nav> 
                {/* </div> */}
            </div>
    )
}

export default Header;