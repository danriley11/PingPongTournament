import React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import './App.css';
import { CounterButton } from './components/buttons/CounterButton.styles';
import { Grid } from './components/core/displays.styles';
import { PingPongFormData } from './components/PingPongForm.constants';

function App() {
  const [scoreCount1, setScoreCount1] = useState(0);
  const [scoreCount2, setScoreCount2] = useState(0);

  const formMethods = useForm<PingPongFormData>();
  const { register, watch, handleSubmit, control } = formMethods;

  const onSubmit = handleSubmit(() => {});

  return (
    <form onSubmit={onSubmit}>
      <Grid cols="1fr 1fr 1fr 1fr 1fr" marginLeft={20} style={{ border: '3px solid red' }}>
        <div />
        {/* TODO: Uniquely identify form */}
        <div>
          <div>
            <label>Player 1 name</label>
            <input type="text" {...register('player1NameFieldName')} />
          </div>

          <div>
            <p>Games won</p>
            {/* <Radio id={'deathSaves2'} name={'deathSaves'} label={'2'} value={''} /> */}
          </div>

          <div>
            <button
              type="button"
              style={{ backgroundColor: 'grey' }}
              onClick={() => setScoreCount1(scoreCount1 - 1)}>
              -
            </button>
            <input
              type="number"
              value={scoreCount1}
              {...register('player1ScoreCounterFieldName')}
              style={{
                width: '48px',
                margin: '0px 8px 0px 8px',
                textAlign: 'center',
                paddingLeft: '12px',
              }}
            />
            <button
              type="button"
              style={{ backgroundColor: 'grey' }}
              onClick={() => setScoreCount1(scoreCount1 + 1)}>
              +
            </button>
          </div>
        </div>
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
        <div>
          <div>
            <label>Player 2 name</label>
            <input type="text" {...register('player2NameFieldName')} />
          </div>

          <div>
            <p>Games won</p>
            {/* <Radio id={'deathSaves2'} name={'deathSaves'} label={'2'} value={''} /> */}
          </div>

          <div>
            <button type="button" onClick={() => setScoreCount2(scoreCount2 - 1)}>
              -
            </button>
            <input
              type="number"
              value={scoreCount2}
              {...register('player2ScoreCounterFieldName')}
              style={{ width: '48px' }}
            />
            <button type="button" onClick={() => setScoreCount2(scoreCount2 + 1)}>
              +
            </button>
          </div>
        </div>
        <div />
      </Grid>
    </form>
  );
}

export default App;
