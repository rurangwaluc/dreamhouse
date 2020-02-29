import React from 'react';
import img from '../img/about.jpg'
import Menu from './Menu'

const AboutPage = () => {
  return (
    <div >
      <Menu />
      <div id='contt' className="container">
        <div className="row ">

          <div className="col-md-12 mt-3 ">
            <h1 id='about-h' className="display-5 text-center mb-5">It's our pleasure to serve you!</h1>

            <h2 className="text-center mb-2">Our Company</h2>
          </div>

          <div class="col-md-6 mb-3" >
            <img src={img} alt="Ima" className=" rounded" />
          </div>
          <div className="col-md-5 ml-auto" >
            <p className="lead">Illum repudiandae ratione facere explicabo. Consequatur dolor optio iusto, quos autem voluptate ea? Sunt laudantium fugiat, mollitia voluptate? Modi blanditiis!</p>
           
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;
