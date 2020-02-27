import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
// import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
  property,
  showViewPropertyButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemovePropertyButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSizesss

}) => {



  const showViewButton = showViewProductButton => {
    return (
      showViewPropertyButton && (
        <div className='text-center'>

          <Link to={`/property/${property._id}`} className="mr-2">
            <button id='r' className="btn  btn-outline-success mt-2 mb-2 ">View Property</button>
          </Link>
        </div>
      )
    );
  };











  return (
    <div className='card-animation'>
    <div id='sh' className="col-md-12 bg-light mb-3  border">
      <div className="">
        <div className="h1 mb-3 mt-3 text-center">
          {property.title}


        </div>
        <ShowImage item={property} url='property' />
        <div  className="border">
          <p id='d' className="text-center lead  mt-2">{property.description.substring(0, 100)} </p>
          <div className='row m-auto'>
            <div className='col-md-6 col-sm-6'>
              <small className="">Status:
                {
                  property.status && property.status.name === "rent" ? <span className='badge badge-pill p-1 badge-danger'>rent</span> : <span className='badge badge-pill p-1 badge-success'>sale</span>
                }
              </small> <br />
              <small className="">Price: <span className='badge badge-success p-1'>${property.price}</span></small><br />
              <small className="">Bedrooms: <span id='size' className='badge badge-dark p-1'>{property.bedrooms}</span>  </small><br />
              <small className="">Bathrooms: <span id='size' className='badge badge-dark p-1'>{property.bathrooms}</span> </small><br />
              <small className=" ">Garage: <span id='size' className='badge badge-dark p-1'>{property.garage}</span></small><br />
              <small className=" ">Lounge: <span id='size' className='badge badge-dark p-1'>{property.lounge}</span></small><br />

            </div>


            <div className='col-md-6 col-sm-6'>

              <small className=" ">Email: <span id='size' className='badge badge-dark p-1'>{property.email}</span></small><br />
              <small className=" ">Address: <span id='size' className='badge badge-dark p-1'>{property.address}</span></small><br />
              <small className=" ">Contact: <span id='size' className='badge badge-dark p-1'>{property.contact}</span></small><br />
              <small className=" ">City: <span id='size' className='badge badge-dark p-1'>{property.city}</span></small><br />
            </div>

            <small className="shadow ml-3 mt-3 text-secondary border p-2">Added on {moment(property.createdAt).fromNow()}</small><br />
          </div>
          <br />

          {showViewButton(showViewPropertyButton)}


        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;