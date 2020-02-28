 <div className="login-signup">
    
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="rec-shap">
            <form>
              <h5 className="login-txt">Register</h5>
              <div className="form-group">
                <label for="InputEmail">Name</label>
                <input type="email" className="form-control" id="InputEmail" value={name}
                  onChange={handleChange('name')}
                />
              </div>
              <div className="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail"  value={email}
                   onChange={handleChange("email")}
                />
              </div>
              <div className="form-group">
                <label for="InputPassword">Password</label>
                <input type="password" className="form-control" id="InputPassword"value={password}
                   onChange={handleChange("password")}
                  minLength="6"
                />
              </div>
              
              <div className="form-group">
                <button  onClick={clickSubmit} type="submit" className="btn">Register</button>
              </div>
              <div className="form-group">
               <Link to="/signin" className="new-signup">Not a member yet? Create account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>