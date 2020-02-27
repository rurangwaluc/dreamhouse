import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Layout from '../core/Layout';
import { signup } from '../auth';
// import img from '../img/signin.jpg'
import Menu from '../core/Menu'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: ' ',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, success, error } = values;

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
      <div id='cont' className="container  bg-light  p-1 ">
        <div className=" text-center">
          
          <p className="lead text-secondary mt-5">
            <i className="fas fa-user"></i>{' '}
            Create An Account</p>
        </div>
        <div className="rows  d-flex">
          <div className="col-md-8 m-auto col-sm-12 text-center">
            <form className="form ">
              <div className="form-group rounded">
                <input
                  className="rounded "
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange('name')}
                // required
                />

              </div>
              <div className="form-group">
                <input
                  className="rounded "
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                   onChange={handleChange('email')}
                // required
                />
              </div>

              <div className="form-group">
                <input
                  className="rounded "
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                   onChange={handleChange('password')}
                // minLength='6'
                />
             
              
              </div>
              <input
              onClick={clickSubmit}
                type="submit"
                className="btn btn-success btn-block w-75  h3"
                value="Register"
              />
              <p className="my-1">
                Already have an account? <Link to="/signin">Sign In</Link>
              </p>
            </form>
          </div>

          
        </div>
      </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );

    return (
      <div>
      <Menu />
        <div
            title=""
            description="Register To Work With US"
            className=" col-md-8 offset-md-2"
        >
        <div id='err'>
          {showSuccess()}
            {showError()}
        </div>
            
            {signUpForm()}
        </div>
      </div>  
    );
};

export default Signup;