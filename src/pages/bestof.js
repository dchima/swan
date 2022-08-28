import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen, Decors } from 'styles';
import {
  Nav,
  ArticleCard,
  Loader,
} from 'components';

const { REACT_APP_API_URL } = process.env;
const AppContainer = styled.div`
${Decors.animate.fadeIn(4)};
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 100px 30px 50px 160px;
  ${Screen.pad`
  margin: 100px 30px 50px 50px;
  `};
  ${Screen.tablet`
    margin: 100px 30px 50px 160px;
  `};
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
    getArticles {
      id
      title
      author
      category
      link
      summary
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`${REACT_APP_API_URL}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': `${REACT_APP_API_URL}` },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({ articles: response.data.getArticles, loading: false });
      })
      // eslint-disable-next-line no-console
      .catch(console.log);
  }

  render() {
    const articles = this.state.articles.map(
      (article) => <ArticleCard key={article.id} content={article}/>,
    );
    if (this.state.loading) return <Loader />;
    return (
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Best Of the Internet</title>
        </Helmet>
        <GlobalStyle />
        <Batch>
          {articles}
        </Batch>
        <Nav theme={this.props.theme} toggleTheme={this.props.toggleTheme}/>
      </AppContainer>
    );
  }
}

export default App;
