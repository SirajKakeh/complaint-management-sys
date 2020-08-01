import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import SendComplaint from "./SendComplaint";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} />
          </Route>
          <Route path="/create-complaint">
            <SendComplaint />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
