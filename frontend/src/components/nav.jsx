import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()
    const auth = localStorage.getItem('user')
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }
    return (
        <div className="bg-primary">
            <ul className="container d-flex justify-content-start align-items-center navbar nav">
                <li className="nav-item logo rounded">
                    <img alt="company " className="logo rounded-pill" src="https://novelti.com.tn/img/logo-novel-ti-plan-de-travail-1-copie-10@1x.png" />
                </li>


                <li className="nav-item m-auto">
                    <Link className="nav-link fs-1 text-white" to="/">User Data</Link>
                </li>
               

            </ul>
        </div>
    );

}

export default NavBar;
