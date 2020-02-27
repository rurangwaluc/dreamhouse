import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProperties } from './apiCore';
import Card from './Card';
import Search from './Search';

const Home = () => {
  const [propertiesByArrival, setPropertiesByArrival] = useState([]);
  const [error, setError] = useState(false);

 

  const loadPropertiesByArrival = () => {
    getProperties('createdAt').then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setPropertiesByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadPropertiesByArrival();
  }, []);

  return (
    <Layout
      title="Here Are Our Properties"
      description="Its Your Turn To Make Choice"
      className="container-fluid"
    >
      <Search />
      <div className='text-center'>

      <h2 className="mb-4 ">New Arrivals</h2>
      </div>
      <div className="row">
        {propertiesByArrival.map((property, i) => (
          <div key={i} className="col-md-4 col-sm-12 mb-3">
            <Card property={property} />
          </div>
        ))}
      </div>

    </Layout>
  );
};

export default Home;