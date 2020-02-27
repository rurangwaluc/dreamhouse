import React, { useState, useEffect } from "react";
import { getStatuses, list } from "./apiCore";
import Card from "./Card";

const Search = () => {
    const [data, setData] = useState({
        statuses: [],
        status: "",
        search: "",
        results: [],
        searched: false
    });

    const { statuses, status, search, results, searched } = data;

    const loadStatuses = () => {
        getStatuses().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, statuses: data });
            }
        });
    };

    useEffect(() => {
        loadStatuses();
    }, []);

    const searchData = () => {
        // console.log(search, status);
        if (search) {
            list({ search: search || undefined, status: status }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} property`;
        }
        if (searched && results.length < 1) {
            return `No properties found`;
        }
    };

    const searchedProperties = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((property, i) => (
                        <div key={i} className="col-4 mb-3">
                            <Card property={property} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const searchForm = () => (
         <div >
      <form  onSubmit={searchSubmit}>
   
          <div className="d-flex bg-light border ml-4  p-2">

           <div className="">
                <select
                    className="btn mr-2 p-1 border-0  bg-light"
                    onChange={handleChange("status")}
                >
                    <option value="All">All</option>
                    {statuses.map((c, i) => (
                        <option className="bg-dark text-light" key={i} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
              <input
              className="form-control p-2"
          onChange={handleChange("search")}
               id="search" type="text" placeholder="Type Title" />
              
                
            </div>
          <button className="btn p-1 bg-light border-0 mb-1 ml-2">Search</button>
          </div>     
      </form>
    </div>
    );

    return (
        <div className="row">
            <div className=" ml-auto mr-5 mb-3">{searchForm()}</div>
            <div className="container-fluid mb-3">
                {searchedProperties(results)}
            </div>
        </div>
    );
};

export default Search;  