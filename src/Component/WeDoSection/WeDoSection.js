import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';



const serviceData = [
    {
        id: '1',
        photoUrl: 'https://i.ibb.co/5jzRVpC/Group-65-2x.png',
        title: 'Experience Design',
        description: 'The point of using Lorem Ipsum is that it that it has a more-or-less normal.'
    },
    {
        id: '2',
        photoUrl: 'https://i.ibb.co/frt2St3/Group-66-2x.png ',
        title: 'Interface Design',
        description: 'The point of using Lorem Ipsum is that it that it has a more-or-less normal.'
    },
    {
        id: '3',
        photoUrl: 'https://i.ibb.co/QmvN3bX/Group-69-2x.png',
        title: 'Prototyping',
        description: 'The point of using Lorem Ipsum is that it that it has a more-or-less normal.'
    }, {
        id: '4',
        photoUrl: 'https://i.ibb.co/F8SPDLb/Group-72-2x.png',
        title: 'Illustration',
        description: 'The point of using Lorem Ipsum is that it that it has a more-or-less normal.'
    }
]

const WeDoSection = () => {
    return (
        <section>
            <div className="container ">
                <div className="heading-text text-center">
                    <h2>What we do</h2>
                    <p>Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our strength </p>
                </div>
                <div className="row row-cols-1  my-4 pt-4">
                    {
                        serviceData.map(service => <ServiceCard service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default WeDoSection;