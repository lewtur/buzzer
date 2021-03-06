import React, { Component } from 'react';
import styled from 'styled-components';
import Sound from 'react-sound';
import './App.css';
import Buzzer from './Buzzer';
import Overlay from './Overlay';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const teams = ['red', 'blue', 'green', 'yellow'];

class App extends Component {

    intervalId = 0;
    buzzerSounds = {
        red: 'door.mp3',
        blue: 'door.mp3',
        green: 'door.mp3',
        yellow: 'door.mp3'
    }

    constructor(props) {
        super(props);
        this.state = {
            displayOverlay: false,
            countdown: 0,
            intervalId: 0,
            teamCurrentlyAnswering: '',
            score: teams.reduce((prev, curr) => ({
                ...prev,
                [curr]: 0
            }), {})
        };
    }

    resetInterval() {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }

    buzz = (teamColour) => {
        this.setState({
            displayOverlay: true,
            countdown: 4,
            teamCurrentlyAnswering: teamColour
        });

        this.intervalId = setInterval(() => {
            if (this.state.countdown === 0) {
                this.resetInterval();
            } else {
                this.setState({
                    countdown: this.state.countdown - 1
                });
            }
        }, 1000);
    }

    correctAnswerCallback = () => {
        this.setState(prevState => ({
            score: {
                ...prevState.score,
                [prevState.teamCurrentlyAnswering]: prevState.score[prevState.teamCurrentlyAnswering] += 1,
            },
            displayOverlay: false,
            countdown: 0,
            teamCurrentlyAnswering: '',
        }));
        this.resetInterval();
    }

    incorrectAnswerCallback = () => {
        this.setState({
            displayOverlay: false,
            countdown: 0,
            teamCurrentlyAnswering: '',
        });
        this.resetInterval();
    }

    render() {
        const { displayOverlay, countdown, score, teamCurrentlyAnswering } = this.state;

        return (
            <Container>

                {teams.map(team => {
                    if (team === teamCurrentlyAnswering) {
                        return <Sound url={this.buzzerSounds[team]} playStatus={Sound.status.PLAYING} />
                    }
                })}

                <Overlay
                    display={displayOverlay}
                    countdown={countdown}
                    correctAnswerCallback={this.correctAnswerCallback}
                    incorrectAnswerCallback={this.incorrectAnswerCallback}
                />

                {
                    teams.map(team => (
                        <Buzzer colour={team} isClickable={!displayOverlay} onClick={this.buzz} score={score[team]} />
                    ))
                }
            </Container>
        );
    }
}

export default App;
