import React from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import './App.css';
import { Button } from './components/buttons/Button.styles';
import { PingPongFormData, playerList } from './components/PingPongForm.constants';
import Player from './components/player/Player';
import { ControlsContainer, PingPongGameContainer } from './components/styles/Containers.styles';
import { Arrow, ScoreInput } from './components/styles/Inputs.styles';
import { LabelStyled, List, ListItem } from './components/styles/Typography.styles';

function App() {
  const [isArrowRight, setIsArrowRight] = useState(true);

  const formMethods = useForm<PingPongFormData>({
    defaultValues: {
      player1Name: undefined,
      player1Opponent: undefined,
      player1Wins: [false, false],
      player1Scores: 0,
      player2Name: undefined,
      player2Opponent: undefined,
      player2Wins: [false, false],
      player2Scores: 0,
    },
  });
  const { handleSubmit, reset } = formMethods;

  const onSubmit = handleSubmit((formData) => {
    (formData.player1Opponent = formData.player2Name),
      (formData.player2Opponent = formData.player1Name),
      console.log(formData);
  });
  // const onSubmit = handleSubmit(async (formData) => {
  //   await xxx({
  //     variables: {
  //       player1Opponent: formData.player2Name,
  //       player2Opponent: formData.player1Name,
  //     },
  //   });
  // });

  const player1Game1Ref = React.createRef<boolean>();

  //TODO: Breakdown code into components
  //TODO: Save match should update to airtable
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit}>
        <PingPongGameContainer>
          {/* Add useFormContext */}
          <Player isPlayer1={true} isLeft />

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
                    player1Scores: 0,
                    player2Name: undefined,
                    player2Opponent: undefined,
                    player2Wins: [false, false],
                    player2Scores: 0,
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
                    player1Scores: 0,
                    player2Name: undefined,
                    player2Opponent: undefined,
                    player2Wins: [false, false],
                    player2Scores: 0,
                  });
                }}>
                Reset
              </Button>
            </ControlsContainer>
          </ControlsContainer>

          <Player isPlayer1={false} isRight />
        </PingPongGameContainer>
      </form>
    </FormProvider>
  );
}

export default App;
