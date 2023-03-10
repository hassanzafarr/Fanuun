import "./App.css";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import USvisa from "./pages/US/US";
import UKvisa from "./pages/UK/UK";
import Contact from "./pages/Contact/Contact";
import Canada from "./pages/Canada/Canada";
// import Attest from "./pages/Services-subpage/Attestation/Attest";
// import Document from "./pages/Services-subpage/Document-Page/Document";

import {
  Attest,
  Document,
  Screening,
  Sealed,
  Translation,
} from "./pages/Services-subpage";

import { Route, Routes } from "react-router-dom";
import Test from "./pages/Test/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uk" element={<UKvisa />} />
        <Route path="/us" element={<USvisa />} />
        <Route path="/canada" element={<Canada />} />

        <Route path="/attest" element={<Attest />} />
        <Route path="/document" element={<Document />} />
        <Route path="/sealed" element={<Sealed />} />
        <Route path="/screening" element={<Screening />} />
        <Route path="/translation" element={<Translation />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
