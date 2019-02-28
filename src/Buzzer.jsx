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
    font-size: 4rem;
`;

class Buzzer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    render() {
        const { colour, onClick, score, isClickable } = this.props;

        return (
            <BuzzerStyles onClick={() => isClickable ? onClick(colour) : null} colour={colour}>
                <Score>{score}</Score>
            </BuzzerStyles>
        );
    }
}

export default Buzzer;