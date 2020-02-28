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
 <div className="login-signup">
    
    <div className="container m">
      <div className="row">
        <div className="col-12">
          <div className="rec-shap">
            <form>
              <h5 className="login-txt">Login</h5>
              <div className="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" className="form-control rounded " id="InputEmail"  value={email}
                   onChange={handleChange("email")}
                />
              </div>
              <div className="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" className="form-control rounded" id="InputPassword"value={password}
                   onChange={handleChange("password")}
                  minLength="6"
                />
              </div>
              
              <div className="form-group">
                <button  onClick={clickSubmit} type="submit" className="btn">Login</button>
              </div>
              <div className="form-group">
               <Link to="/signup" className="new-signup text-decoration-none text-secondary">Not a member yet? Create account</Link>
              </div>
            </form>
          </div>
        </div>
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