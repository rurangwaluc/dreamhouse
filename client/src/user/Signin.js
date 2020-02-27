import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import Layout from "../core/Layout";
import Spinner from 'react-bootstrap/Spinner';

import { signin, authenticate, isAuthenticated } from "../auth";
import Menu from '../core/Menu'


const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };

    const signUpForm = () => (

       <div id='cont' className="container  bg-light  p-1">

        <div  className="rows  d-flex">

          <div className="col-md-8 m-auto col-sm-12 text-center">
            <div className="text-secondary text-center mt-3">
              <p className="lead h2">
                <i className="fas fa-user"></i> Login 
          </p>
            </div>
            <form id='form' className="form ">
              <div className="form-group  ">
                <input
                  className="rounded   p-2"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                   onChange={handleChange("email")}
                />
              </div>
              <div className="form-group">
                <input
                  className="rounded p-2"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                   onChange={handleChange("password")}
                  minLength="6"
                />
              </div>
              <input 
               onClick={clickSubmit}
              type="submit" className="btn btn-success btn-block w-75  h3" value="Login" />
              <p className="my-1 m-auto">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
          
        </div>
      </div>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
             <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
             </Spinner>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return  (
         <div>
      <Menu />
        <div
            title="" 
            description="Login Please"
            className=" col-md-8 offset-md-2"
        >
        <div id='err' className='mb-5'>
      {showLoading()}
            
            {showError()}
        </div>
            
            {signUpForm()}
            {redirectUser()}
        </div>
     </div>
    );
};

export default Signin;