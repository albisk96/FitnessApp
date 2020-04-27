import React, { useEffect, useState } from 'react';
import { Form, InputGroup, FormControl, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import useDebounce from '../../helpers/debounce';

function Search() {
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 500);
  const history = useHistory();
  
  useEffect(() => {
    history.push(query ? `?query=${query}` : '/exercises');
  }, [debouncedSearchTerm]);

  function handleSearchSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={e => handleSearchSubmit(e)}>
      <Row className="justify-content-md-center">
        <Col md="6">
          <InputGroup>
            <FormControl
              placeholder="Paieška"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="search-btn" type="submit">
            </button>
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;