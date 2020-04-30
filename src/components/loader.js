import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, Screen } from 'styles';


const LoaderContainer = styled.div`
  position: fixed;
  top: 40%;
  left: 48%;
  z-index: 99;
  ${Screen.largePhone`
    top: 40%;
    left: 44%;
  `};
`;
const LoaderWrapper = styled.div`
  height: 20%;
  width: 20%;
  content: url(${({ theme }) => theme.loader});
`;
const Loader = () => (
  <>
    <GlobalStyle />
    <LoaderContainer>
      <LoaderWrapper />
    </LoaderContainer>
  </>
);

export default Loader;
