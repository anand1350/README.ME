import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clap from "../images/clap.svg";
import comment from "../images/comment.svg";
import save from "../images/save.svg";
import share from "../images/share.svg";

export default function ArticleFooter() {
  return (
    <div>
      <Row>
        <Col xs={6}>
          <div>
            <img className="m-2" src={clap} alt="" /> 1.5k
            <img className="m-2" src={comment} alt="" /> 30
          </div>
        </Col>
        <Col xs={6}>
          <div className="float-end">
            <img className="m-2" src={share} alt="" />
            <img src={save} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
