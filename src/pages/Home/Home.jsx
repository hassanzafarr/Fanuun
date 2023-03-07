import React from "react";

import {
  Blog,
  Header,
  Provide,
  Footer,
  // WhyFanuun,
  Process,
  Opp,
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
    {/* <WhyFanuun /> */}
    <Opp />
    <CTA htag="Are You Interested in " red="Immigration?" />
    <Brand />
    <Footer />
  </div>
);

export default Home;
