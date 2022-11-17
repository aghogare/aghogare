/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Landing Page
 *
 * This is the landing page when webapp gets loaded '/' route
 *
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../home";
import EducationPage from "../education";
import NewsPage from "../news";
import ServicePage from "../service";
import NotFound from "../NotFound";
import { Layout } from "antd";
import PageHeaderComponent from "../../components/pageheader";
import AboutUsPage from "../aboutus";
import "../../App.css";
import "antd/dist/antd.min.css";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header>
            <PageHeaderComponent />
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
