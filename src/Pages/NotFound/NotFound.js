import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className="notFound-container">
            <img src={notFound} alt="" />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;