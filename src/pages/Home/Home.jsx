import React from "react";

import {
  Blog,
  Header,
  Provide,
  Footer,
  WhyFanuun,
  Process,
} from "../../containers";

import { Navbar, Brand, CTA } from "../../components";

const Home = () => (
  <div className="home-main">
    <Navbar />

    <Header />
    <Brand />
    <Process />
    <Blog />
    <Provide />
    <WhyFanuun />
    <CTA />
    <Brand />
    <Footer />
  </div>
);

export default Home;
