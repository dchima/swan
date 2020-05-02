import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  ProjectCard,
  Loader,
} from 'components';

const { REACT_APP_API_URL } = process.env;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 100px 30px 50px 160px;
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
    getProjects {
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
      loading: true,
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
        this.setState({ projects: response.data.getProjects, loading: false });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  render() {
    const projects = this.state.projects.map(
      (project) => <ProjectCard key={project.id} content={project} />,
    );
    if (this.state.loading) return <Loader />;
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

export default App;
