import { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  FormItem,
  FormLayout,
  FormLayoutGroup,
  FormStatus,
  Header,
  Textarea,
} from '@vkontakte/vkui';

import { useFormContext } from '@app/context';
import { modileBreakpoint } from '@config/ui';
import { defaultFormValue, formStatusEnum } from '@config/form';
import { validate } from '@utils/validate';

import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import PlaceSelect from '../PlaceSelect';
import Subheading from '../Subheading';

import s from './Form.module.scss';

const Form = () => {
  const { formState, setFormState, setValidationStatus, validationStatus } = useFormContext();

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = () => {
    setValidationStatus(formStatusEnum.DEFAULT);
    const { isValid, message } = validate(formState);
    setErrorMessage(message);

    if (isValid) {
      console.log('Отправка данных формы...');

      setTimeout(() => {
        const data = JSON.stringify(formState);
        console.log('Отправлено:\n', data);
      }, 1000);
    } else {
      setValidationStatus(formStatusEnum.ERROR);
    }
  };

  const clearFormData = () => {
    setFormState(defaultFormValue);
    setValidationStatus(formStatusEnum.DEFAULT);
  };

  const [comment, setComment] = useState('');

  const onTextAreaChange = (event) => {
    setComment(event.target.value);
  };

  const onTextAreaBlur = () => {
    setFormState((data) => ({ ...data, comment }));
  };

  return (
    <div className={s.formWrapper}>
      <Header size="large">Бронирование переговорной</Header>

      <FormLayout className={s.formLayout} onSubmit={submitHandler}>
        {validationStatus === formStatusEnum.ERROR && (
          <FormStatus mode={formStatusEnum.ERROR}>{errorMessage}</FormStatus>
        )}

        <PlaceSelect />

        <FormLayoutGroup mode="vertical">
          <Subheading title="Дата" />
          <FormItem className={s.datePickerContainer}>
            <DatePicker />
          </FormItem>
        </FormLayoutGroup>

        <FormLayoutGroup mode="vertical">
          <Subheading title="Время" />
          <div className={s.timeFields}>
            <TimePicker suphead="Время начала" id="start" />
            <TimePicker suphead="Время конца" id="end" />
          </div>
        </FormLayoutGroup>

        <FormLayoutGroup mode="vertical">
          <Subheading title="Комментарий" />
          <FormItem>
            <Textarea value={comment} onChange={onTextAreaChange} onBlur={onTextAreaBlur} />
          </FormItem>
        </FormLayoutGroup>

        <ButtonGroup
          mode="horizontal"
          gap={window.innerWidth > modileBreakpoint ? 'm' : 's'}
          stretched
          className={s.buttonGroup}
        >
          <Button size="l" appearance="neutral" stretched onClick={clearFormData}>
            Очистить
          </Button>
          <Button size="l" appearance="accent" stretched onClick={submitHandler}>
            Отправить
          </Button>
        </ButtonGroup>
      </FormLayout>
    </div>
  );
};

export default Form;
