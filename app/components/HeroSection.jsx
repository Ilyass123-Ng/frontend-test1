'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center py-5">
                    
                    <Col lg={6} className="text-content">
                        <h1 className="hero-headline">
                            Streamline Your <br />
                            Entire Business <br />
                            Operation
                        </h1>
                        <p className="hero-description">
                            The all-in-one cloud ERP for modern enterprises. 
                            Optimize workflows, data, and growth from a single, intelligent platform.
                        </p>
                    </Col>

                    <Col lg={6} className="visual-content">
                        <div className="hero-3d-wrapper">
                            
                           
                            <img src="/icon-cross-removebg-preview.png" alt="icon" className="img-icon-1" />
                            <img src="/icon-chart-removed-bg.png" alt="icon" className="img-icon-2" />

                            <div className="dashboard-card hero-3d-animation">

                                <Image 
                                    src="/hero-3d-dashboard.png" 
                                    alt="Aura ERP Dashboard" 
                                    width={1000} 
                                    height={700}
                                    className="img-fluid rounded-5"
                                    priority
                                />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
