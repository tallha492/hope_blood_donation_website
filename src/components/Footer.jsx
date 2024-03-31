import {
  BsInstagram,
  BsFacebook,
  BsGoogle,
  BsFillDropletFill,
} from "react-icons/bs";
import { Button, Col, Container, Row } from "reactstrap";

export default function Footer() {
  return (
    <>
      <Container className="bg-danger" fluid>
        <Container>
          <Row className="py-5">
            <Col md={3} className="py-4">
              <img
                src="/logo.png"
                width={170}
                height={100}
                alt="hope donation"
              />
            </Col>
            <Col
              md={4}
              className="pt-4"
              style={{ borderLeft: "2px solid black", paddingLeft: "13%" }}
            >
              <a href="/find-blood" className="text-white">
                Find Blood
              </a>
              <p className="pt-3" style={{ fontSize: "14px" }}>
                2024 Hope Blood Donation. All right reserved.
              </p>
            </Col>
            <Col md={5} className="pt-4">
              <div style={{ paddingLeft: "59%" }}>
                <Button
                  className="btn btn-warning px-4 text-danger nanbtn border-0"
                  href="/donate"
                >
                  <span className="mx-1">Donote</span>
                  <BsFillDropletFill />
                </Button>
              </div>
              <div className="mt-2" style={{ paddingLeft: "46%" }}>
                <a
                  href="https://www.instagram.com"
                  className="mx-5"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://www.facebook.com"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://www.google.com"
                  className="mx-5"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <BsGoogle />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
