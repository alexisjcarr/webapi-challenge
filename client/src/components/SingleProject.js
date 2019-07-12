import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const SingleProject = props => {
  const project = props.projects.find(
    project => `${project.id}` === props.match.params.id
  );

  const [projectDetails, setProjectDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/projects/${project.id}/actions`)
      .then(res => {
        console.log("details", res);
        setProjectDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [projectDetails]);

  if (!project) {
    return <h1>Loading Project... Please wait...</h1>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <NavLink to="/">Home</NavLink>
      <Card>
        <h2>
          <strong>{project.name}</strong>
        </h2>
        <p>
          <strong>DESCRIPTION</strong>
        </p>
        <p>{project.description}</p>
        <p>
          <strong>ACTIONS</strong>
        </p>
        {projectDetails.map(des => {
          return <p>{des.description}</p>;
        })}
      </Card>
    </div>
  );
};

export default SingleProject;
