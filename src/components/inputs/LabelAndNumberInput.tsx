import { Controller, useForm } from 'react-hook-form';
import { InputLabel, LabelAndInputContainer, TextInput } from './LabelAndTextInput.styles';

type LabelAndNumberInputProps = {
  label: string;
  value: number;
};

const LabelAndNumberInput = ({ label, value }: LabelAndNumberInputProps) => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name={label}
      render={({ field }) => (
        <LabelAndInputContainer>
          <InputLabel>{label}</InputLabel>
          <TextInput value={field.value || 0} onChange={field.onChange} />
        </LabelAndInputContainer>
      )}
    />
  );
};
export default LabelAndNumberInput;
