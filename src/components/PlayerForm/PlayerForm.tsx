import { Controller, useForm } from 'react-hook-form';
import Counter from '../inputs/Counter';
import LabelAndTextInput from '../inputs/LabelAndTextInput';
import { PlayerFormFormData } from './PlayerForm.constants';

type PlayerFormProps = {};

const PlayerForm = () => {
  const formMethods = useForm<PlayerFormFormData>();
  const { register, watch, control } = formMethods;

  const watchedPlayerName = watch('playerNameFieldName');

  return (
    <div>
      <Controller
        control={control}
        name="playerNameFieldName"
        rules={{ required: true }}
        render={({ field }) => (
          <LabelAndTextInput label="Player Name" value={field.value} onChange={field.onChange} />
        )}
      />

      <div>
        <p>Games won</p>
        {/* <Radio id={'deathSaves2'} name={'deathSaves'} label={'2'} value={''} /> */}
      </div>

      <Controller
        control={control}
        name="playerNameFieldName"
        rules={{ required: true }}
        render={({ field }) => <Counter label={'Score'} value={Number(field.value)} />}
      />
    </div>
  );
};

export default PlayerForm;
