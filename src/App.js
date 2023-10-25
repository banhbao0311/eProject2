import styled, { css, keyframes } from "styled-components";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import HomeBody from "./components/home-body/HomeBody";


import BoxContainer from "./ui/StyledBoxContainer";

import CloseButton from "./ui/CloseButton";

import Footer from "./components/footer/Footer"

import UserDropDown from "./components/navbar/UserDropDown";
import AgainstDiscrimination from "./components/AgainstDiscrimination/AgainstDiscrimination";
import Accessibility from "./components/Accessibility/Accessibility";




const Test = styled.div`
  height: 5000px;
`;

function App() {
  return (
    <>
      {/* <NavBar />
      <HomeBody/> */}
      {/* <AgainstDiscrimination/> */}
      <Accessibility/>

    </>
  );
}

export default App;
