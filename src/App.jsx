import { useState } from "react";
import Header from "./Components/Header/NavBar/Header";
import Title from "./Components/Header/Title/Title";
import ContainerInfo from "./Components/Info/container1/ContainerInfo";
import ContainerInfo2 from "./Components/Info/Container2/ContainerInfo2";
import Stars from "./Components/stars/Stars";
import Imagenes from "./Components/vacaciones/images/Imagenes";
import Text from "./Components/vacaciones/Text/Text";

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
      <div className="contenidoBallena">
        <Text/>
        <Imagenes/>
      </div>
      <div className="StarsContainer">
        <Stars/>
      </div>

    </div>
  );
}

export default App;
