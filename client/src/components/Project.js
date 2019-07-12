import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  margin: 10px;
  color: black;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
`;

const Card = styled.div`
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Project = props => {
  const { project } = props;
  return (
    <Card>
      <StyledNav to={`/${project.id}`}>
        <h1>{project.name}</h1>
      </StyledNav>
    </Card>
  );
};

export default Project;
