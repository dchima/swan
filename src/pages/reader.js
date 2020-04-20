import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  Page,
} from 'components';

const { REACT_APP_API_URL } = process.env;
const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 230px 400px 50px 400px;
  ${Screen.largePhone`
    margin-left: 10px;
    margin-right: 10px;
  `};
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      publication: {},
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    const query = `
      query {
        getPublication(slug: "${slug}") {
          id
          title
          author
          category
          description
          slug
          body
        }
      }
    `;
    fetch(REACT_APP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ publication: response.data.getPublication });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  render() {
    const { publication } = this.state;
    return (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{publication.title}</title>
        </Helmet>
        <GlobalStyle />
        <Page content={publication} />
        <Nav theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
      </AppContainer>
    );
  }
}

export default App;
