import {
    API
} from '../config';

export const createStatus = (userId, token, status) => {
    return fetch(`${API}/status/create/${userId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(status)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const updateStatus = (statusId, userId, token, status) => {
    return fetch(`${API}/status/${statusId}/${userId}`, {
            method: 'PUT',
            headers: {
                // content type?
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(status)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createProperty = (userId, token, property) => {
    return fetch(`${API}/property/create/${userId}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: property
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getStatus = statusId => {
    return fetch(`${API}/status/${statusId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getStatuses = () => {
    return fetch(`${API}/status/statuses`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listOrders = (userId, token) => {
    return fetch(`${API}/order/list/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getStatusValues = (userId, token) => {
    return fetch(`${API}/order/status-values/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateOrderStatus = (userId, token, orderId, status) => {
    return fetch(`${API}/order/${orderId}/status/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                status,
                orderId
            })
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

// /**
//  * to perform crud on product
//  * get all products
//  * get a single product
//  * update single product
//  * delete single product
//  */

export const getProperties = () => {
    return fetch(`${API}/property?limit=undefined`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const deleteProperty = (propertyId, userId, token) => {
    return fetch(`${API}/property/${propertyId}/${userId}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProperty = propertyId => {
    return fetch(`${API}/property/${propertyId}`, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProperty = (propertyId, userId, token, property) => {
    return fetch(`${API}/property/update/${propertyId}/${userId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: property
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};