import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsAction } from "./redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector(state => state.jobs.content);
  const isLoading = useSelector(state => state.jobs.isLoading);
  const error = useSelector(state => state.jobs.hasError);
  const errorMess = useSelector(state => state.jobs.errorMessage);
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(fetchJobsAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <Link to={"/favorites"}>
            <h2>Go to favorite</h2>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
              required
            />
          </Form>
        </Col>
        {error ? (
          <Alert variant="danger">{errorMess}</Alert>
        ) : (
          <div>
            {isLoading ? (
              <Col xs={10} className="mt-5 text-center">
                <Spinner animation="border" variant="primary" />
              </Col>
            ) : (
              <Col xs={10} className="mx-auto mb-5">
                {jobs.map(jobData => (
                  <Job key={jobData._id} data={jobData} />
                ))}
              </Col>
            )}
          </div>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
