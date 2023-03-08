import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const FoodTruck = ({ foodTruck }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem', margin: '50px' }}>
                <Card.Body>
                <Card.Title>{foodTruck.applicant}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{foodTruck.facilitytype}</Card.Subtitle>
                <Card.Text>
                    Address: {foodTruck.address}
                    <br />
                    Permit Expiration Date: {foodTruck.expirationdate?.slice(0, 10)}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
                    View More
                </Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{foodTruck.applicant}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>{foodTruck.facilitytype}</h5>
                    <p>Permit: {foodTruck.permit} {foodTruck.status}</p>
                    <p>Permit Expiration Date: {foodTruck.expirationdate?.slice(0, 10)}</p>
                    <p>Food Items: {foodTruck.fooditems?.length > 0 ? foodTruck.fooditems : 'None'}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default FoodTruck;