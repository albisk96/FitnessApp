import React, { useEffect, useState } from 'react';
import { Form, InputGroup, FormControl, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useDebounce from '../../helpers/debounce';
import { search } from '../../helpers/search';

function Search() {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const debouncedSearchTerm = useDebounce(query, 500);
  const history = useHistory();
  const { addQuery } = search.useQueryBuilder();
  useEffect(() => {
    history.push(
      `${location.pathname}?${addQuery('query', debouncedSearchTerm)}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              placeholder="Search"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;