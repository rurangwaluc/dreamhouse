import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
// import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#62d9dd" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <nav  className="navbar navbar-expand-lg navbar-light bg-dark ">
        <h1 id="h1">
            <Link className="text-light" to="/">
                DreamHome
        </Link>
        </h1>
        <ul className="">
            <li className="nav-item">
                <Link className="nav-link"
                    style={isActive(history, "/properties")}
                    to="/properties">
                    Properties
                </Link>
            </li>


            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/about")}
                            to="/about"
                        >
                            About
                    </Link>
                    </li>

                </Fragment>
            )}
            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Logout
                   </span>
                </li>
            )}
        </ul>
    </nav>
);

export default withRouter(Menu);