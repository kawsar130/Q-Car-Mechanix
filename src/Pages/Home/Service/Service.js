import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-3 text-wrap">
            <img src={img} alt="" />
            <h3 className="py-2">{name}</h3>
            <h5>Service Charge: ${price}</h5>
            <p className="p-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning fw-bold">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;