import { useState } from 'react';
import { FormLayout, FormLayoutGroup, FormStatus, Header } from '@vkontakte/vkui';

import { useFormContext } from '@app/context';
import { formStatusEnum } from '@config/form';
import { validate } from '@utils/validate';

import FooterButtons from '@components/FooterButtons';
import CommentSection from '@components/CommentSection';
import DatePicker from '@components/DatePicker';
import TimePicker from '@components/TimePicker';
import PlaceSelect from '@components/PlaceSelect';
import Subheading from '@components/Subheading';

import s from './Form.module.scss';

const Form = () => {
  const { formState, setValidationStatus, validationStatus, setLoading } = useFormContext();

  const [errorMessage, setErrorMessage] = useState('');

  const sendForm = (data) => {
    console.log('Отправка данных формы...');
    setLoading(true);

    setTimeout(() => {
      const jsonData = JSON.stringify(data);
      console.log('Отправлено:\n', jsonData);

      setLoading(false);
    }, 1000);
  };

  const submitHandler = () => {
    setValidationStatus(formStatusEnum.DEFAULT);
    const { isValid, message } = validate(formState);

    if (isValid) {
      sendForm(formState);
    } else {
      setErrorMessage(message);
      setValidationStatus(formStatusEnum.ERROR);
    }
  };

  return (
    <div className={s.formWrapper}>
      <Header size="large">Бронирование переговорной</Header>

      <FormLayout className={s.formLayout} onSubmit={submitHandler}>
        {validationStatus === formStatusEnum.ERROR && (
          <FormStatus mode={formStatusEnum.ERROR}>{errorMessage}</FormStatus>
        )}

        <PlaceSelect />

        <DatePicker />

        <FormLayoutGroup mode="vertical">
          <Subheading title="Время" />
          <div className={s.timeFields}>
            <TimePicker suphead="Время начала" id="start" />
            <TimePicker suphead="Время конца" id="end" />
          </div>
        </FormLayoutGroup>

        <CommentSection />

        <FooterButtons submitHandler={submitHandler} />
      </FormLayout>
    </div>
  );
};

export default Form;
