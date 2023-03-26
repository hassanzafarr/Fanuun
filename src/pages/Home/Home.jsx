import React from "react";

import {
  Blog,
  Header,
  Provide,
  Footer,
  // WhyFanuun,
  Process,
  Opp,
  Slide,
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
    <Slide />
    <Opp />
    <CTA htag="Are You Interested in " red="Immigration?" />

    <Footer />
  </div>
);

export default Home;
