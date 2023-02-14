import { BsFillChatSquareDotsFill } from "react-icons/bs";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function MenuNews() {
  return (
    
    <div className="p-4 menunews">

      <Row >
          <Col xs={8}>
            <div className="d-block">
              <h4>More from Cassie Kozyrkov</h4>
              <p>
                Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art,
                theatre, decision science. All views are my own. twitter.com/quaesita
              </p>
              </div>
          </Col>
          <Col xs={4}>

          <div className="d-flex float-right justify-content-end">
            <div className="slim-nav-link main-btn align-items-center ">Follow</div>
            <div className="slim-nav-link main-btn align-items-center ">
              <BsFillChatSquareDotsFill />
            </div>
          </div>
          </Col>
      </Row>
    </div>
    
  );
}



