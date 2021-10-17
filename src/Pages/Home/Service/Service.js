import React from 'react';
import './Service.css';

const Service = ({service}) => {
    // const {service} = props;
    const {name, price, description, img} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3 className="py-2">Name: {name}</h3>
            <h5>Service Charge: ${price}</h5>
            <p className="p-3">{description}</p>
        </div>
    );
};

export default Service;