import React from "react";
import styled from "styled-components";
import Clock from "./Clock";

const App = () => {
  let deadline = "December, 30, 2024";

  return (
    <Container className="App">
      <h3>Faltan</h3>
      <Clock deadline={deadline} />
      <h3>PARA LA ENTREGA</h3>
      <h3>DE DEPARTAMENTOS</h3>
    </Container>
  );
};

const Container = styled.div`
  h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`

export default App;