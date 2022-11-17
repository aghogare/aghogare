/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Header Page
 *
 * This is the header page consist of menu's for navigating to different pages
 *
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Input, Col, Row } from "antd";
import "./pageheader.css";

const { Search } = Input;
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem("Home", "home", null, [
    getItem("Home", "1"),
    getItem("Submit a Press Release", "2"),
  ]),
  getItem("Services", "services", null, [getItem("Services", "3")]),
  getItem("News", "news", null, [
    getItem("All News", "4"),
    getItem("News with Multimedia", "5"),
    getItem("News by Industry", "6"),
    getItem("News by Subject", "7"),
    getItem("News by Language", "8"),
    getItem("Trades & Events ", "9"),
  ]),
  getItem("Education", "education", null, [
    getItem("Overview", "10"),
    getItem("Blog", "11"),
    getItem("Distribution & Media", "12"),
    getItem("Media & Journalist Tools", "13"),
    getItem("Sample Press Release", "14"),
    getItem("Find Your News Online", "15"),
    getItem("Disclosure Resources", "16"),
  ]),
  getItem("About Us", "aboutus", null, [
    getItem("Overview", "17"),
    getItem("Become a Member", "18"),
    getItem("Contact Us", "19"),
    getItem("Careers", "20"),
    getItem("Business Wire Newsroom", "21"),
    getItem("Business Wire Events", "22"),
  ]),
];

const PageHeaderComponent = () => {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.keyPath[1]);
    setCurrent(e.key);
  };

  return (
    <div className="header-menu">
      <Row>
        <Col span={16}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultOpenKeys={["home"]}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
        <Col span={8}>
          <Search
            placeholder="input search text"
            style={{
              width: "80%",
              verticalAlign: "middle",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PageHeaderComponent;
