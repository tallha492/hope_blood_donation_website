import React from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const DonateFormModal = ({ visible, setVisible }) => {
  return (
    <Modal isOpen={visible} centered toggle={() => setVisible(false)}>
      <ModalHeader toggle={() => setVisible(false)}>Volunteer Form</ModalHeader>
      <ModalBody>
        <Form>
          <Row className="mb-3">
            <Col>
              <Label>Full Name:</Label>
              <Input
                type="text"
                required
                className="form-control"
                placeholder="Enter your full name."
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Label>Email Address:</Label>
              <Input
                type="email"
                required
                className="form-control"
                placeholder="Enter your email address."
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Label>Country:</Label>
              <Input
                type="text"
                required
                className="form-control"
                placeholder="Enter your country."
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Label>City:</Label>
              <Input
                type="text"
                required
                className="form-control"
                placeholder="Enter your city."
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Label>Phone Number:</Label>
              <Input
                type="number"
                required
                className="form-control"
                placeholder="Enter your phone number."
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Label>Blood Group:</Label>
              <Input type="select">
                <option value="" selected disabled>
                  Choose your blood group
                </option>
              </Input>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button>Cancel</Button>
        <Button>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DonateFormModal;
