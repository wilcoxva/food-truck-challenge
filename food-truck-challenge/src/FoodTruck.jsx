import React from 'react';
import Card from 'react-bootstrap/Card';

const FoodTruck = ({ foodTruck }) => {
    return (
        <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Body>
            <Card.Title>{foodTruck.applicant}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{foodTruck.facilitytype}</Card.Subtitle>
            <Card.Text>
                Address: {foodTruck.address}
                <br />
                Permit Expiration Date: {foodTruck.expirationdate?.slice(0, 10)}
            </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default FoodTruck;