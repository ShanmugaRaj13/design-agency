import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    { id: 1, img: "https://picsum.photos/400/300?1", title: "E-Commerce Website" },
    { id: 2, img: "https://picsum.photos/400/300?2", title: "Netflix Clone" },
    { id: 3, img: "https://picsum.photos/400/300?3", title: "Portfolio Website" },
    { id: 4, img: "https://picsum.photos/400/300?4", title: "Dashboard UI" },
    { id: 5, img: "https://picsum.photos/400/300?5", title: "React CRUD App" },
    { id: 6, img: "https://picsum.photos/400/300?6", title: "Blog Website" }
  ];

  return (
    <section id="portfolio" className="portfolio py-5">
      <Container>
        <h2 className="text-center mb-4">Portfolio</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={project.id}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;