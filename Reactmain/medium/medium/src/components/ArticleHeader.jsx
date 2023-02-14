import React from "react";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import linked from "../images/linked.svg";
import chain from "../images/chain.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ArticleHeader() {
  return (
    <>
      <Row className="align-items-center">
        <Col xs={1}>
          <img
            className="rounded-circle"
            src="https://placeimg.com/500/500/people?t=1673509945561"
            alt=""
          />
        </Col>
        <Col xs={7} className="mt-3">
          <p className="w-75">Cassie Kozyrkov Dec 27, 2022 * 9min read</p>
        </Col>
        <Col xs={4}>
          <img className="m-2" src={twitter} alt="" />
          <img className="m-2" src={facebook} alt="" />
          <img className="m-2" src={linked} alt="" />
          <img className="m-2" src={chain} alt="" />
        </Col>
      </Row>
    </>
  );
}
