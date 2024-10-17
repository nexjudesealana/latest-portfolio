import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import myLogo from "../assets/img/myLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={myLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nexxus-sealana">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/NexSealana">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/nexsealana/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright © 2023 Nexxus Jude V. Sealana. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
