import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { Button } from './components/buttons/Button.styles';
import UncontrolledCheckbox from './components/checkbox/UncontrolledCheckbox';
import { Grid } from './components/core/displays.styles';
import { PingPongFormData, playerList } from './components/PingPongForm.constants';
import {
  ControlsContainer,
  CounterContainer,
  GamesWonContainer,
  NameInputContainer,
  PlayerNamesContainer,
} from './components/styles/Containers.styles';
import { Arrow } from './components/styles/Inputs.styles';
import { LabelStyled, List, ListItem } from './components/styles/Typography.styles';

function App() {
  let player1Score = 0;
  let player2Score = 0;
  const [isArrowRight, setIsArrowRight] = useState(true);

  const formMethods = useForm<PingPongFormData>({
    defaultValues: {
      player1ScoreCounterFieldName: 0,
      player2ScoreCounterFieldName: 0,
    },
  });
  const { register, handleSubmit, reset, watch, setValue } = formMethods;

  const onSubmit = handleSubmit((formData) => console.log(formData));

  //TODO: Breakdown code into components
  //TODO: Save match should update to airtable
  return (
    <form onSubmit={onSubmit}>
      <Grid cols="1fr 1fr 1fr 1fr 1fr" marginLeft={20} style={{ border: '3px solid red' }}>
        <div />
        {/* TODO: Uniquely identify form */}
        <div id="leftColumn">
          <NameInputContainer>
            <LabelStyled>Player Name</LabelStyled>
            <input type="text" {...register('player1NameFieldName')} />
          </NameInputContainer>

          <GamesWonContainer>
            <LabelStyled>Games won</LabelStyled>
            <div>
              <input
                type="checkbox"
                id="Game1"
                {...register('player1GamesWonFieldName')}
                style={{ accentColor: 'green' }}
              />
              <input
                type="checkbox"
                id="Game2"
                {...register('player1GamesWonFieldName')}
                style={{ accentColor: 'green' }}
              />
            </div>
          </GamesWonContainer>

          <LabelStyled>Player score</LabelStyled>
          <CounterContainer>
            <Button onClick={() => setValue('player1ScoreCounterFieldName', player1Score--)}>
              -
            </Button>
            <input
              {...register('player1ScoreCounterFieldName', {
                valueAsNumber: true,
              })}
              type="number"
              value={player1Score}
              max={21}
              style={{
                width: '96px',
                margin: '0px 8px 0px 8px',
                textAlign: 'center',
                paddingLeft: '12px',
                fontSize: '16px',
              }}
            />
            <Button onClick={() => setValue('player1ScoreCounterFieldName', player1Score++)}>
              +
            </Button>
          </CounterContainer>

          <LabelStyled>Player list</LabelStyled>
          <PlayerNamesContainer>
            {playerList.map((player) => (
              <UncontrolledCheckbox key={player.name} player={player} />
            ))}
          </PlayerNamesContainer>
        </div>
        <div id="middleColumn">
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
                  player1ScoreCounterFieldName: 0,
                  player2ScoreCounterFieldName: 0,
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
                  player1NameFieldName: '',
                  player1GamesWonFieldName: '',
                  player1ScoreCounterFieldName: 0,
                  player2NameFieldName: '',
                  player2GamesWonFieldName: '',
                  player2ScoreCounterFieldName: 0,
                });
              }}>
              Reset
            </Button>
          </ControlsContainer>
        </div>
        <div id="rightColumn">
          <NameInputContainer>
            <LabelStyled>Player Name</LabelStyled>
            <input type="text" {...register('player2NameFieldName')} />
          </NameInputContainer>

          <GamesWonContainer>
            <LabelStyled>Games won</LabelStyled>
            <div>
              <input
                type="checkbox"
                id="Game1"
                {...register('player2GamesWonFieldName')}
                style={{ accentColor: 'green' }}
              />
              <input
                type="checkbox"
                id="Game2"
                {...register('player2GamesWonFieldName')}
                style={{ accentColor: 'green' }}
              />
            </div>
          </GamesWonContainer>

          <LabelStyled>Player score</LabelStyled>
          <CounterContainer>
            <Button onClick={() => setValue('player2ScoreCounterFieldName', player2Score--)}>
              +
            </Button>
            <input
              {...register('player2ScoreCounterFieldName', {
                valueAsNumber: true,
              })}
              type="number"
              value={player2Score}
              max={21}
              style={{
                width: '96px',
                margin: '0px 8px 0px 8px',
                textAlign: 'center',
                paddingLeft: '12px',
                fontSize: '16px',
              }}
            />
            <Button onClick={() => setValue('player2ScoreCounterFieldName', player2Score++)}>
              +
            </Button>
          </CounterContainer>
        </div>
        <div />
      </Grid>
    </form>
  );
}

export default App;
