import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { Button } from './components/buttons/Button.styles';
import UncontrolledCheckbox from './components/checkbox/UncontrolledCheckbox';
import { Spacing64 } from './components/core/spacing';
import { PingPongFormData, playerList } from './components/PingPongForm.constants';
import Player from './components/player/Player';
import {
  ControlsContainer,
  CounterContainer,
  GamesWonContainer,
  NameInputContainer,
  PingPongGameContainer,
  PlayerNamesContainer,
} from './components/styles/Containers.styles';
import { Arrow, ScoreInput } from './components/styles/Inputs.styles';
import { LabelStyled, List, ListItem } from './components/styles/Typography.styles';

function App() {
  const [isArrowRight, setIsArrowRight] = useState(true);

  const formMethods = useForm<PingPongFormData>({
    defaultValues: {
      player1Name: undefined,
      player1Opponent: undefined,
      player1Wins: [false, false],
      player1Scores: [0, 0, 0],
      player2Name: undefined,
      player2Opponent: undefined,
      player2Wins: [false, false],
      player2Scores: [0, 0, 0],
    },
  });
  const { handleSubmit, reset } = formMethods;

  const onSubmit = handleSubmit((formData) => console.log(formData));

  const player1Game1Ref = React.createRef<boolean>();

  //TODO: Breakdown code into components
  //TODO: Save match should update to airtable
  return (
    <form onSubmit={onSubmit}>
      <PingPongGameContainer>
        <Player playerNumber={1} isLeft />

        <ControlsContainer>
          <h1>VS</h1>

          <Arrow
            src="serverArrow.svg"
            isArrowRight={isArrowRight}
            onClick={() => setIsArrowRight(!isArrowRight)}
            type="button"
          />

          <ControlsContainer>
            <Button
              $width={128}
              $height={80}
              marginBottom={40}
              onClick={() => setIsArrowRight(!isArrowRight)}>
              Swap Server
            </Button>

            <Button
              $width={128}
              $height={80}
              marginBottom={40}
              onClick={() => {
                reset({
                  player1Name: undefined,
                  player1Opponent: undefined,
                  player1Wins: [false, false],
                  player1Scores: [0, 0, 0],
                  player2Name: undefined,
                  player2Opponent: undefined,
                  player2Wins: [false, false],
                  player2Scores: [0, 0, 0],
                });
              }}>
              Next Game
            </Button>

            <Button $width={128} $height={80} marginBottom={40} onClick={() => onSubmit()}>
              Save Match
            </Button>

            <Button
              $width={128}
              $height={80}
              marginBottom={40}
              onClick={() => {
                reset({
                  player1Name: undefined,
                  player1Opponent: undefined,
                  player1Wins: [false, false],
                  player1Scores: [0, 0, 0],
                  player2Name: undefined,
                  player2Opponent: undefined,
                  player2Wins: [false, false],
                  player2Scores: [0, 0, 0],
                });
              }}>
              Reset
            </Button>
          </ControlsContainer>
        </ControlsContainer>

        <Player playerNumber={2} isRight />
      </PingPongGameContainer>
    </form>
  );
}

export default App;
