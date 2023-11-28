import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Statistics = () => {
    return (
        <div className="d-flex justify-content-center">
        <Badge bg="secondary" className="p-3 m-5">5000 Users</Badge>
        <Badge bg="secondary" className="p-3 m-5">10 Trusted Clients</Badge>
        <Badge bg="secondary" className="p-3 m-5">10k+ Downloads</Badge>
    </div>
    );
}

export default Statistics;
