import { InputLabel, LabelAndInputContainer, TextInput } from "./LabelAndTextInput.styles";

type LabelAndNumberInputProps = {
  label: string;
  value: number;
};

// monetaryInput
const LabelAndNumberInput = ({ label, value }: LabelAndNumberInputProps) => (
  <LabelAndInputContainer>
    <InputLabel>{label}</InputLabel>
    <TextInput value={value | 0} />
  </LabelAndInputContainer>
);

export default LabelAndNumberInput;
