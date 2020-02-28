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
     <div className="login-signup">
    
    <div className="container m">
      <div className="row">
        <div className="col-12">
          <div className="rec-shap">
            <form>
              <h5 className="login-txt">Register</h5>
              <div className="form-group">
                <label for="InputEmail">Name</label>
                <input type="email" className="form-control rounded" id="InputEmail" value={name}
                  onChange={handleChange('name')}
                />
              </div>
              <div className="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" className="form-control rounded" id="InputEmail"  value={email}
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
                <button  onClick={clickSubmit} type="submit" className="btn">Register</button>
              </div>
              <div className="form-group">
               <Link to="/signin" className="new-signup">Already Have Account? Login</Link>
              </div>
            </form>
          </div>
        </div>
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