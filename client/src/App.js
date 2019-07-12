import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import ProjectList from "./components/ProjectList";
import SingleProject from "./components/SingleProject";

const App = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/projects")
      .then(res => {
        console.log(res);
        setProjects(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [projects]);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return <ProjectList {...props} projects={projects} />;
          }}
        />
        <Route
          path="/:id"
          render={props => {
            return <SingleProject {...props} projects={projects} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
