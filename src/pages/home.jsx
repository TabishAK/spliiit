import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import SeacrhBar from "../components/SearchBar";
import DetailBox from "../components/DetailBox";
import ContactBox from "../components/ContactBox";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Slider />
      <SeacrhBar />
      <DetailBox />
      <ContactBox />
    </React.Fragment>
  );
};

export default Home;
