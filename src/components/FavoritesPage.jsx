import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToFavoriteAction } from "./redux/actions";

const FavoritesPage = () => {
  const favorites = useSelector(state => state.content.content);
  const dispatch = useDispatch();
  console.log(favorites);
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          {favorites.map((jobData, i) => (
            <Row className="mx-0 mt-3 p-3" key={i} style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={3}>
                <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
              </Col>
              <Col xs={7}>
                <a href={jobData.url} target="_blank" rel="noreferrer">
                  {jobData.title}
                </a>
              </Col>
              <Col xs={2}>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeToFavoriteAction(i));
                  }}
                >
                  remove favorite
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesPage;
