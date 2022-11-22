import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import { CounterButton } from './components/buttons/CounterButton.styles';
import { Grid } from './components/core/displays.styles';
import Counter from './components/inputs/Counter';
import LabelAndTextInput from './components/inputs/LabelAndTextInput';
import PlayerForm from './components/PlayerForm/PlayerForm';
import Radio from './components/radio-buttons/radio';

function App() {
  const [count, setCount] = useState(0);

  const formMethods = useForm();
  const { register, watch, handleSubmit } = formMethods;

  const watchedPlayer1Name = watch('Player1Name');
  const watchedPlayer2Name = watch('Player2Name');

  const onSubmit = handleSubmit(() => {});

  return (
    <form onSubmit={onSubmit}>
      <Grid cols="1fr 1fr 2fr 1fr 1fr" marginLeft={20} style={{ border: '3px solid red' }}>
        <div />
        {/* TODO: Uniquely identify form */}
        <PlayerForm />
        <div>
          <h1>VS</h1>
          <div style={{ height: '128px' }} />
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Swap Server
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Next Game
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Save Match
          </CounterButton>
          <CounterButton $width={128} $height={80} marginBottom={40}>
            Reset
          </CounterButton>
        </div>
        {/* TODO: Uniquely identify form */}
        <PlayerForm />
        <div />
      </Grid>
    </form>
  );
}

export default App;
