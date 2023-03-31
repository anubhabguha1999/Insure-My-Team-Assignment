import React, { useState } from "react";
import { Container, Navbar, Form, Button, FormControl } from "react-bootstrap";

const AppBar = ({ fillSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="text-light ms-4">
            ScrollPost
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto me-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                onClick={() => fillSearch(search)}
                variant="outline-primary"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppBar;
