/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Home Page
 *
 * This is the Home page and gets loaded '/home' route
 *
 */

import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import { Row, Col, Card } from "antd";
import "../../App.css";
import "./home.css";

const HomePage = () => {
  const [newsData, setNewsData] = useState({});
  useEffect(() => {
    get("/bwserve/v1/feed/?type=post")
      .then((result) => {
        setNewsData(JSON.parse(result));
        console.log(JSON.parse(result));
      })
      .catch(() => console.error());
  }, []);
  return (
    <div>
      <Row>
        <Col span={24}>
          <h1>Posts</h1>
        </Col>
        <Col span={16}>
        { newsData?.posts ?
        newsData.posts.map((data) => {
          return <Card style={{marginBottom: '10px', marginLeft:'10px'}} title={data.title}>
            <div className="post-content" dangerouslySetInnerHTML={{__html: data.content}}></div>
          </Card>
        }) : <></>}
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default HomePage;
