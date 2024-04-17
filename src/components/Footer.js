import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Designed and Developed by Mujahidul Islam</h3>
                    <span><h3>Copyright © {year}</h3></span>
                </Col>

                <Col md="4" className="footer-body">
                    <ul className="footer-icons space-x-8">
                        <li className="social-icons">
                            <a
                                href="https://github.com/MUJAHID-WEB"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>

                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/md-mujahidul-islam/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:mujahid30390@gmail.com"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BiLogoGmail />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;