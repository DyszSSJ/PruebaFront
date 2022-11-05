import { useState } from "react";
import Header from "./Components/Header/NavBar/Header";
import Title from "./Components/Header/Title/Title";
import ContainerInfo from "./Components/Info/container1/ContainerInfo";
import ContainerInfo2 from "./Components/Info/Container2/ContainerInfo2";
import vector from "./assets/vectorCurvo.png";

function App() {
  return (
    <div className="vector">
      <div className="container">
        <Header />
        <Title />
      </div>
      <div className="containerInfo">
        <ContainerInfo />
        <ContainerInfo2 />
      </div>
      <div className="cointainer-vector"></div>
    </div>
  );
}

export default App;
