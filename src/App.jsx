import React from "react";
import { Container, Row, Col, Form, Button, Card, Navbar } from "react-bootstrap";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>To-Do Metas</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {/* Formulario */}
          <Col md={4}>
            <Card className="p-3 shadow">
              <h4>Agregar Tarea</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Título</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese título" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Fecha límite</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Button variant="primary" className="w-100">
                  Agregar
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Lista de tareas */}
          <Col md={8}>
            <h4>Mis Tareas</h4>

            <Card className="mb-3 shadow tarea-card">
              <Card.Body>
                <Card.Title>Lista de Tareas</Card.Title>
                <Card.Text>
                  Pendientes y completas
                </Card.Text>
                <p className="fecha">Fecha: 2026-05-01</p>

                <Button variant="success" size="sm" className="me-2">
                  Completar
                </Button>
                <Button variant="danger" size="sm">
                  Eliminar
                </Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </>
  );
}