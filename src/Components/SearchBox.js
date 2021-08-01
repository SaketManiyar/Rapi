import React from 'react';
import { Form, Button, FormControl } from "react-bootstrap";

function SearchBox() {
    return (
      <>
        <Form className="mx-auto my-2 d-flex" style={{width:500}}>
          <FormControl type="search" placeholder="Search" aria-label="Search" />
          <Button style={{marginLeft:10}}variant="outline-success">Search</Button>
        </Form>
      </>
    );
}

export default SearchBox
