import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';
import Images from './Images'

const Property = props => {
    const [property, setProperty] = useState({});
    // const [relatedProperty, setRelatedProperty] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProperty = propertyId => {
        read(propertyId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProperty(data);

            }
        });
    };

    useEffect(() => {
        const propertyId = props.match.params.propertyId;
        loadSingleProperty(propertyId);
    }, [props]);

    return (
        <Layout
            id='d'
            title={property && property.title}
            description={property && property.description && property.description.substring(0, 100)}
            className="container-fluid"
        >

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    {property && property.description && property.bedrooms && <Card property={property} showViewPropertyButton={false} />}
                </div>

                <div id='igs' className="col-md-8 col-sm-12">
                    <div className='mt-3 mb-3'>
                        <Images />

                    </div>
                </div>
            </div>
        </Layout>
    );

};

export default Property;