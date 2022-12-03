import { useState } from 'react';
import { CheckboxWrapper, HiddenCheckbox } from '../styles/Inputs.styles';

type UncontrolledCheckboxProps = {
  player: {
    name: string;
    nickname: string;
    state: boolean;
  };
};

const UncontrolledCheckbox = ({ player }: UncontrolledCheckboxProps) => {
  const [isActive, setIsActive] = useState(player.state);

  return (
    <CheckboxWrapper isActive={isActive}>
      <HiddenCheckbox onClick={() => setIsActive(!isActive)} />
      <span>{player.name}</span>
    </CheckboxWrapper>
  );
};

export default UncontrolledCheckbox;
