import { useReducer, useState } from 'react';
import { CounterButton } from '../buttons/CounterButton.styles';
import LabelAndNumberInput from './LabelAndNumberInput';
import { CounterContainer } from './Counter.styles';

type CounterProps = {
  label: string;
  value: number;
};

const Counter = ({ label, value }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContainer>
      {/* integrate UID for each button */}
      <CounterButton name="minusCounter" onClick={() => setCount(count - 1)}>
        -
      </CounterButton>
      <LabelAndNumberInput label={label} value={count} />
      <CounterButton name="plusCounter" onClick={() => setCount(count + 1)}>
        +
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;
