import React from 'react';
import { Col, Row } from 'reactstrap';
import '../../styles/scss/home/style.scss';
// import { BsBook, BsPersonBoundingBox, BsHeart } from "react-icons/bs";
// import HomeBotao from '../../components/HomeBotao';

export default function Home() {
  return (
    <Row>
      <Col md={12} className="mt-4 mb-4">
        <h1>Home</h1>
      </Col>
      {/* <HomeBotao
        className="mt-3"
        to="/quadrinhos"
        color="primary"
        icon={<BsBook size={40}/>}
        label="Quadrinhos"
      />
      <HomeBotao
        className="mt-3"
        to="/personagens"
        color="success"
        icon={<BsPersonBoundingBox size={40}/>}
        label="Personagens"
      />
      <HomeBotao
        className="mt-3"
        to={`/favoritos/${'1'}`}
        color="info"
        icon={<BsHeart size={40}/>}
        label="Favoritos"
      /> */}
    </Row>
  );
}