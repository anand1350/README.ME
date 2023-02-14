import ArticleHeader from "../components/ArticleHeader";
import ArticleTitle from "../components/ArticleTitle";
import SlimNav from "../components/SlimNav";
import Container from "react-bootstrap/Container";
import MenuOptions from "../components/MenuOptions";
import MenuNews from "../components/MenuNews";
import MenuNewsArticles from "../components/MenuNewsArticles";

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Article() {
  return (
    <>
      <SlimNav />
      <Container>
        <Row>
          <Col xs={8} className='maindiv'>
            <ArticleHeader />
            <ArticleTitle />
            <MenuOptions />
            <MenuNews />
            <MenuNewsArticles />
          </Col>
          <Col xs={4}>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}
