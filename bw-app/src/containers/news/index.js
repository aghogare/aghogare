/**
 * @author Pramod Turakane
 * @company Sai Systems
 * News Page
 *
 * This is the news page and gets loaded '/news' route
 *
 */

import React, { useEffect, useState } from "react";
import { get } from "../../utils/api";
import { Row, Col, Card } from "antd";
import "../../App.css";
import "./news.css";

const NewsPage = () => {
  const [newsData, setNewsData] = useState({});
  useEffect(() => {
    get("/bwserve/v1/feed/?type=news")
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
          <h1>News Page</h1>
        </Col>
        <Col span={16}>
          {newsData?.posts ? (
            newsData.posts.map((data) => {
              return (
                <Card style={{ marginBottom: "10px", marginLeft:'10px' }} title={data.title}>
                  <div className="news-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default NewsPage;
