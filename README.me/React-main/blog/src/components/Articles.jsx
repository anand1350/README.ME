import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default function Articles() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/categories/" + id).then((res) => {
      setArticle(res.data);
      console.log(res.data[0].categories[0]);
    });
  }, []);

  return (
    <>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <h1>{article.description}</h1>
          </Col>
          <Col>
            <h3>
              <img className="imagess" src={article.imageUrl} />
            </h3>
          </Col>
        </Row>
        <Col>
          <p>{article.text}</p>
        </Col>
      </Container>
    </>
  );
}
