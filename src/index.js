import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./components/login";
import { RApolloProvider } from "@rocketgraphql/react-apollo";
import { auth } from "./utils/config";

ReactDOM.render(
  <React.StrictMode>
      <RApolloProvider auth={auth} gqlEndpoint="https://hasura-l4upppg.rocketgraph.app/v1/graphql">
        <Router>
            <Routes>
              <Route path="/login" element={<Signup />}/>
              <Route path="/signup" />
              <Route path="/" element={<App />} />
            </Routes>
        </Router>
      </RApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);