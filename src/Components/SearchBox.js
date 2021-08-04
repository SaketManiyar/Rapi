import React from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';

export const SearchBox = (props) => {
  return (
    <>
      <Form onSubmit={props.getSearch} className="mx-auto my-2 d-flex" style={{ width: 500 }}>
        <FormControl type="search" name="search" placeholder="Search" aria-label="Search" onChange={props.updateSearch}/>
        <Button style={{ marginLeft: 10 }} variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </>
  );
}

export default SearchBox;