import React from "react";
import { Container } from "@material-ui/core";

import Login from "./Login";
import SendComplaint from "./SendComplaint";
import "./App.css";

function App() {
  return (
    <Container>
      <SendComplaint />
      {/* <Login /> */}
    </Container>
  );
}

export default App;
