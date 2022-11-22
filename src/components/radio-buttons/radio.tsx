import { useFormContext } from "react-hook-form";
import { RadioInput, RadioInputWrapper } from "./radio.styles";

type Props = {
  id: string;
  name: string;
  label: string;
  value: string;
  isRequired?: boolean;
} & Omit<JSX.IntrinsicElements["input"], "ref">;

const Radio = ({ id, name, label, value, isRequired = false, ...rest }: Props) => {
  const { register } = useFormContext();
  return (
    <RadioInputWrapper>
      <RadioInput
        id={id}
        value={value}
        {...register(name, {
          required: isRequired ? "Please select a value." : false,
        })}
        {...rest}
      />
      <span style={{ margin: "0px" }}>{label}</span>
    </RadioInputWrapper>
  );
};

export default Radio;
