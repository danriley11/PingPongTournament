import { ButtonContainer } from "./RollerButton.styles";

type Props = {
  label: string;
  value: number;
};

const RollerButton = ({ label, value }: Props) => {
  return (
    <ButtonContainer
      onClick={() => console.log(`You've rolled ${value} on ${label}`)}
    >{`Roll ${label}`}</ButtonContainer>
  );
};

export default RollerButton;
