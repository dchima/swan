import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  ArticleCard,
} from 'components';

const { REACT_APP_API_URL, REACT_APP_API_SECRET } = process.env;

const AppContainer = styled.div`
  border: 1ps solid black;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 100px 200px 30px 380px;
  ${Screen.largePhone`
    margin-left: 10px;
    margin-right: 10px;
  `};
`;
const Batch = styled.div`
  position: relative;
  margin-bottom: 20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  ${Screen.largePhone`
    margin-top: 0px;
    align-items: center;
    margin-bottom: 10px;
`};
`;

const query = `
  query {
    getProjects(secretKey: "${REACT_APP_API_SECRET}") {
      id
      title
      category
      description
      stacks
      githubUrl
      externalUrl
      docsUrl 
    }
  }
`;



class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch(REACT_APP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ projects: response.data.getProjects });
      })
      .catch(console.log);
  }

  render() {
    const projects = this.state.projects.map(
      (project) => <ProjectCard key={project.id} content={project} />,
    );
    return (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects</title>
        </Helmet>
        <GlobalStyle />
        <Batch>
          {projects}
        </Batch>
        <Nav theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
      </AppContainer>
    );
  }
}