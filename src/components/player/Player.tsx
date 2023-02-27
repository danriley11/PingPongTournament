import { useForm } from 'react-hook-form';
import { Button } from '../buttons/Button.styles';
import UncontrolledCheckbox from '../checkbox/UncontrolledCheckbox';
import { Spacing32, Spacing64 } from '../core/spacing';
import { playerList } from '../PingPongForm.constants';
import { PlayerNamesContainer } from '../styles/Containers.styles';
import { ScoreInput } from '../styles/Inputs.styles';
import { LabelStyled } from '../styles/Typography.styles';
import { PlayerContainer, PlayerScoreContainer } from './Player.styles';

type PlayerProps = {
  playerNumber: number;
  isLeft?: boolean;
  isRight?: boolean;
};
const Player = ({ playerNumber, isLeft, isRight }: PlayerProps) => {
  const formMethods = useForm();
  const { register, setValue } = formMethods;

  let playerScore = 0;

  return (
    <PlayerContainer>
      <LabelStyled>Player name:</LabelStyled>
      <Spacing64>
        <select {...register(`player${playerNumber}Name`)}>
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
            {...register(`player${playerNumber}Game`)}
            style={{ accentColor: 'green' }}
          />
          <input
            type="checkbox"
            id="Game2"
            {...register(`player${playerNumber}Game`)}
            style={{ accentColor: 'green' }}
          />
        </div>
      </Spacing32>

      <LabelStyled htmlFor={`player${playerNumber}Score`}>Score</LabelStyled>
      <Spacing64>
        <PlayerScoreContainer>
          <Button onClick={() => setValue(`player${playerNumber}Score`, playerScore--)}>-</Button>
          <ScoreInput
            id={`player${playerNumber}Score`}
            {...register(`player${playerNumber}Score`, { valueAsNumber: true })}
            type="number"
            value={playerScore}
            max={21}
            min={0}
          />
          <Button onClick={() => setValue(`player${playerNumber}Score`, playerScore++)}>+</Button>
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
