import React from 'react';
import { Button } from 'react-bootstrap';
import florenceImg from '../images/16 [Converted]@2x.png'
import NavigationBar from '../NavigationBar/NavigationBar';

const FlorenceAgency = () => {
    return (
        <section className="agency-area">
            <NavigationBar></NavigationBar>
            <div className="container my-5 pt-3  ">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="title-des pr-3">
                            <h1>Florence Agency</h1>
                            <p className="my-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Button className="gradient-btn my-4">See Pricing</Button>
                        </div>
                    </div>
                    <div className="col-md-6 pl-5">
                        <img className="img-fluid" src={florenceImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlorenceAgency;