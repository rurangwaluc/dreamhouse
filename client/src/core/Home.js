import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Menu from "./Menu";


const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <Menu />
      <div className="dark-overlay">
        <div className="landing-inner">
          <p id='home-p' className=" x-large w-75">
           The Best Way To Find Your Home
          </p>
          <div className="buttons mt-5">
            <Link to="/properties" id='home-b' className="btn btn-success p-3 lead">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Home;