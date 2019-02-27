import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Buzzer from './Buzzer';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Buzzer colour="red" />
        <Buzzer colour="blue" />
        <Buzzer colour="green" />
        <Buzzer colour="yellow" />
      </Container>
    );
  }
}

export default App;
