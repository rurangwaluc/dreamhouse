import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProperties, deleteProperty } from "./apiAdmin";

const ManageProperties = () => {

    const [properties, setProperties] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProperties = () => {
        getProperties().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProperties(data);
            }
        });
    };

    const destroy = propertyId => {
        deleteProperty(propertyId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProperties();
            }
        });
    };

    useEffect(() => {
        loadProperties();
    }, []);

    return (
        <Layout
            title="Manage Properties"
            description="Update or Remove a Property"
            className="container-fluid"
        >
            <div className="row container">
                <div className="col-md-8 m-auto">
                    <h2 className="text-center">
                        Total {properties.length} properties
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {properties.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <strong>{p.title}</strong>
                                <button><Link to={`/admin/property/update/${p._id}`}>
                                    <span className="text-success p-3 rounded">
                                        Update
                                    </span>
                                </Link></button>
                                
                                <button className='btn'>

                                <span
                                    onClick={() => destroy(p._id)}
                                    className="text-danger"
                                >
                                    Delete
                                </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            </div>
        </Layout>
    );
};

export default ManageProperties;