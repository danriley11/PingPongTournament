import { useFormContext } from 'react-hook-form';
import { Button } from '../buttons/Button.styles';
import UncontrolledCheckbox from '../checkbox/UncontrolledCheckbox';
import { Spacing32, Spacing64 } from '../core/spacing';
import { PingPongFormData, playerList } from '../PingPongForm.constants';
import { PlayerNamesContainer } from '../styles/Containers.styles';
import { ScoreInput } from '../styles/Inputs.styles';
import { LabelStyled } from '../styles/Typography.styles';
import { PlayerContainer, PlayerScoreContainer } from './Player.styles';

type PlayerProps = {
  isPlayer1: boolean;
  isLeft?: boolean;
  isRight?: boolean;
};
const Player = ({ isLeft, isRight, isPlayer1 }: PlayerProps) => {
  const { register, setValue } = useFormContext<PingPongFormData>();

  let player1Score = 0;
  let player2Score = 0;

  return (
    <PlayerContainer>
      <LabelStyled>Player name:</LabelStyled>
      <Spacing64>
        <select {...register(isPlayer1 ? 'player1Name' : 'player2Name')}>
          <option value={undefined}>Select a name</option>
          {playerList.map((player) => (
            <option value={player.name} key={player.name}>
              {player.name}
            </option>
          ))}
        </select>
      </Spacing64>

      <Spacing32>
        <LabelStyled>Games won</LabelStyled>
        <div>
          <input
            type="checkbox"
            id="Game1"
            {...register(isPlayer1 ? 'player1Wins' : 'player2Wins')}
            style={{ accentColor: 'green' }}
          />
          <input
            type="checkbox"
            id="Game2"
            {...register(isPlayer1 ? 'player1Wins' : 'player2Wins')}
            style={{ accentColor: 'green' }}
          />
        </div>
      </Spacing32>

      <LabelStyled htmlFor={`player1Scores`}>Score</LabelStyled>
      <Spacing64>
        <PlayerScoreContainer>
          <Button
            onClick={() =>
              setValue(
                isPlayer1 ? 'player1Scores' : 'player2Scores',
                isPlayer1 ? player1Score-- : player2Score--,
              )
            }>
            -
          </Button>
          <ScoreInput
            id={isPlayer1 ? 'player1Scores' : 'player2Scores'}
            {...register(isPlayer1 ? 'player1Scores' : 'player2Scores', { valueAsNumber: true })}
            type="number"
            value={isPlayer1 ? player1Score : player2Score}
            max={21}
            min={0}
          />
          <Button
            onClick={() =>
              setValue(
                isPlayer1 ? 'player1Scores' : 'player2Scores',
                isPlayer1 ? player1Score++ : player2Score++,
              )
            }>
            +
          </Button>
        </PlayerScoreContainer>
      </Spacing64>

      {isLeft && (
        <>
          <LabelStyled>Player list</LabelStyled>
          <PlayerNamesContainer>
            {playerList.map((player) => (
              <UncontrolledCheckbox key={player.name} player={player} />
            ))}
          </PlayerNamesContainer>
        </>
      )}

      {isRight && (
        <>
          <LabelStyled>Game History</LabelStyled>
          <div style={{ width: '350px' }} />
        </>
      )}
    </PlayerContainer>
  );
};

export default Player;
