import React from 'react';
import styled from 'styled-components';

const OverlayStyles = styled.div`
    position: absolute;
    height: 30%;
    width: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: grey;
`;

const Button = styled.div`
    background-color: ${props => props.colour};
    display: flex;
    align-self: center;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem; 
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const CountdownContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
`;

const Overlay = ({ display, countdown, correctAnswerCallback, incorrectAnswerCallback }) => {
    if (!display) {
        return <div />;
    }

    return (
        <OverlayStyles>
            <CountdownContainer>
                {countdown}
            </CountdownContainer>
            <ButtonContainer>
                <Button colour="green" onClick={correctAnswerCallback}>Correct</Button>
                <Button colour="red" onClick={incorrectAnswerCallback}>Wrong</Button>
            </ButtonContainer>
        </OverlayStyles>
    );
}

export default Overlay;