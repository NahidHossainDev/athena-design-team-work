import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className=" service-card col-lg-3 col-md-6 col-sm-8 p-4 text-center mb-2">
            <img className="img-fluid" src={service.photoUrl} alt="" />
            <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;