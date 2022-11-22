import { InputLabel, LabelAndInputContainer, TextInput, Value } from './LabelAndTextInput.styles';
import { useFormContext, useController } from 'react-hook-form';
import { forwardRef, Ref } from 'react';

type LabelAndTextInputProps = {
  label?: string;
  value: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const LabelAndTextInput = forwardRef(
  ({ label, value }: LabelAndTextInputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <LabelAndInputContainer>
        <InputLabel>{label || 'No label provided'}</InputLabel>
        <TextInput placeholder={value} ref={ref} />
      </LabelAndInputContainer>
    );
  },
);

export default LabelAndTextInput;
