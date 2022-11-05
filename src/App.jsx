import { useState } from "react";
import Header from "./Components/Header/NavBar/Header";
import Title from "./Components/Header/Title/Title";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Title/>
      </div>
    </>
  );
}

export default App;
