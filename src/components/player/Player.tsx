import { useEffect, useState } from 'react';
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
  const { register, setValue, getValues } = useFormContext<PingPongFormData>();

  const [player1Score, setPlayer1Score] = useState(getValues('player1Scores'));
  const [player2Score, setPlayer2Score] = useState(getValues('player2Scores'));

  useEffect(() => {}, [player1Score, player2Score]);

  const handleDecrement = () => {
    if (isPlayer1) {
      setPlayer1Score(player1Score - 1);
      setValue('player1Scores', player1Score - 1);
    } else {
      setPlayer2Score(player2Score - 1);
      setValue('player2Scores', player2Score - 1);
    }
  };

  const handleIncrement = () => {
    if (isPlayer1) {
      setPlayer1Score(player1Score + 1);
      setValue('player1Scores', player1Score + 1);
    } else {
      setPlayer2Score(player2Score + 1);
      setValue('player2Scores', player2Score + 1);
    }
  };

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

      <LabelStyled htmlFor={isPlayer1 ? 'player1Scores' : 'player2Scores'}>Score</LabelStyled>
      <Spacing64>
        <PlayerScoreContainer>
          <Button onClick={handleDecrement}>-</Button>
          <ScoreInput
            id={isPlayer1 ? 'player1Scores' : 'player2Scores'}
            {...register(isPlayer1 ? 'player1Scores' : 'player2Scores', { valueAsNumber: true })}
            type="number"
            value={isPlayer1 ? player1Score : player2Score}
            max={21}
            min={0}
          />
          <Button onClick={handleIncrement}>+</Button>
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
