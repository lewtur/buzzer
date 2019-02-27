import React, { Component } from 'react';
import styled from 'styled-components';

const BuzzerStyles = styled.div`
    display: flex; 
    flex-basis: calc(50% - 40px);  
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.colour};
    margin: 0.8rem;
`;

const Score = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

class Buzzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    render() {
        const { colour } = this.props;

        return (
            <BuzzerStyles colour={colour}>
                <Score>Score</Score>
            </BuzzerStyles>
        );
    }
}

export default Buzzer;