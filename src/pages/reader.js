import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Nav,
  Page,
  Loader,
} from 'components';

const { REACT_APP_API_URL } = process.env;
const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 230px 750px 50px 200px;
  ${Screen.largePhone`
    margin-left: 10px;
    margin-right: 10px;
  `};
`;

// const loaderStyle = {
//   width: '10%',
//   margin: 'auto',
//   display: 'block',
//   marginLeft: '70%',
//   border: '1px solid blue',
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      publication: {},
      loading: true,
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
        this.setState({ publication: response.data.getPublication, loading: false });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  render() {
    const { publication, loading } = this.state;
    if (loading) return <Loader />;
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