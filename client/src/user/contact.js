import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div id='fom' className="container bg-secondary rounded  mt-5 bg-light">
      <div id='fom' className="row ">
        <div className="col-md-12 text-center text-secondary">
          <h2 className="large  mt-3 text-dark">Get In Touch! </h2>

          <p className="lead h4 ">
            Need to post a house? Please don't hesitate to contact us.
          </p>
        </div>

        <div className="col-sm-12  ">
          <form className="form w-75 m-auto col-md-12 ">
            <div className="form-group rounded">
              <input
                className="rounded "
                type="text"
                placeholder="Name"
                name="name"

              // required
              />

            </div>
            <div className="form-group">
              <input
                className="rounded "
                type="email"
                placeholder="Email Address"
                name="email"


              />
            </div>

            <div className="form-group">
              <input
                className="rounded "
                type="subject"
                placeholder="Subject"
                name="subject"


              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                rows="4"
                className="form-group  "
              />
            </div>

            <div className="w-75  m-auto ">
              <Link to="" className="btn btn-block  h3  text-white bg-success">
                Send
            </Link>
            </div>

          </form>

        </div>


      </div>
    </div>
  );
};

export default ContactPage;
