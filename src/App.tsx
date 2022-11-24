import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { CounterButton } from './components/buttons/CounterButton.styles';
import { Grid } from './components/core/displays.styles';
import { PingPongFormData, playerList } from './components/PingPongForm.constants';
import {
  ControlsContainer,
  CounterContainer,
  GamesWonContainer,
  InputContainer,
  NameInputContainer,
  PlayerNamesContainer,
} from './components/styles/Containers.styles';
import { Arrow } from './components/styles/Inputs.styles';
import { LabelStyled, List, ListItem } from './components/styles/Typography.styles';
import { useForm } from 'react-hook-form';
import { ButtonContainer } from './components/buttons/RollerButton.styles';

function App() {
  const [player1ScoreState, setPlayer1ScoreState] = useState(0);
  const [player2ScoreState, setPlayer2ScoreState] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isArrowRight, setIsArrowRight] = useState(true);

  const formMethods = useForm<PingPongFormData>();
  const { register, handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formData) => console.log(formData));

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

          <LabelStyled>Player list</LabelStyled>
          <PlayerNamesContainer>
            <List id="14">
              {playerList.map((player) => (
                <ListItem
                  key={player.name}
                  id={player.name}
                  isActive={isActive}
                  onClick={() => setIsActive(!isActive)}>
                  {player.name}
                </ListItem>
              ))}
            </List>
          </PlayerNamesContainer>
        </div>
        <div id="middleColumn">
          <h1>VS</h1>

          <Arrow
            src="serverArrow.svg"
            isArrowRight={isArrowRight}
            onClick={() => setIsArrowRight(!isArrowRight)}
          />

          <ControlsContainer>
            <CounterButton
              $width={128}
              $height={80}
              marginBottom={40}
              onClick={() => setIsArrowRight(!isArrowRight)}>
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
          </ControlsContainer>
        </div>
        {/* TODO: Uniquely identify form */}
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
