import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from '../components/Assets/Images/Group 10.png';

export const HeroSection = () => {
    return (
        <>
            <div className="container row pt-2">
                <div className="col-md-6">
                    <h1>The Fast Pinpoint</h1>
                    <h1 className="text-danger">Get Started -&gt;</h1>
                    <h1>Tracking & Reservation</h1>
                </div>
                <div className="col-md-6">
                    <img src={Image} alt="Your Alt Text Here" />
                </div>
            </div>
            <div style={{margin:'2rem'}} className="col-md-6">Pinpoint is the fastest tracking and reservation software
                solution for personal and enterprise vehicles for institutes,
                offices and companies with live tracking, history recording,
                estimated arrival time and usage report generation and much more features</div>


        </>

    );
}
