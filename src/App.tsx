import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { CounterButton } from './components/buttons/CounterButton.styles';
import { Grid } from './components/core/displays.styles';
import { PingPongFormData } from './components/PingPongForm.constants';
import {
  CounterContainer,
  GamesWonContainer,
  NameInputContainer,
} from './components/styles/Containers.styles';
import { LabelStyled } from './components/styles/Typography.styles';

function App() {
  const [player1ScoreState, setPlayer1ScoreState] = useState(0);
  const [player2ScoreState, setPlayer2ScoreState] = useState(0);

  const formMethods = useForm<PingPongFormData>();
  const { register, handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formData) => console.log(formData));

  //TODO: have registered playerScores submit with respective counts
  //TODO: resolve counterButton styled component not working
  return (
    <form onSubmit={onSubmit}>
      <Grid cols="1fr 1fr 1fr 1fr 1fr" marginLeft={20} style={{ border: '3px solid red' }}>
        <div />
        {/* TODO: Uniquely identify form */}
        <div>
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
            <CounterButton onClick={() => setPlayer1ScoreState(player1ScoreState - 1)}>
              -
            </CounterButton>
            <input
              {...register('player1ScoreCounterFieldName', {
                valueAsNumber: true,
              })}
              value={player1ScoreState}
              type="number"
              max={21}
              style={{
                width: '96px',
                margin: '0px 8px 0px 8px',
                textAlign: 'center',
                paddingLeft: '12px',
                fontSize: '16px',
              }}
            />
            <CounterButton onClick={() => setPlayer1ScoreState(player1ScoreState + 1)}>
              +
            </CounterButton>
          </CounterContainer>
        </div>
        <div>
          <h1>VS</h1>
          <div style={{ height: '128px' }} />
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Swap Server
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Next Game
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40} onClick={() => onSubmit()}>
            Save Match
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Reset
          </CounterButton>
        </div>
        {/* TODO: Uniquely identify form */}
        <div>
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
            <CounterButton onClick={() => setPlayer2ScoreState(player2ScoreState - 1)}>
              -
            </CounterButton>
            <input
              {...register('player2ScoreCounterFieldName', { valueAsNumber: true })}
              type="number"
              value={player2ScoreState}
              max={21}
              style={{
                width: '96px',
                margin: '0px 8px 0px 8px',
                textAlign: 'center',
                paddingLeft: '12px',
                fontSize: '16px',
              }}
            />
            <CounterButton onClick={() => setPlayer2ScoreState(player2ScoreState + 1)}>
              +
            </CounterButton>
          </CounterContainer>
        </div>
        <div />
      </Grid>
    </form>
  );
}

export default App;
