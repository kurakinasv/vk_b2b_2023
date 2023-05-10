import { FormLayout, FormLayoutGroup, FormStatus, Header } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import { useFormContext } from '@app/context';
import { formStatusEnum } from '@config/form';

import FooterButtons from '@components/FooterButtons';
import CommentSection from '@components/CommentSection';
import DatePicker from '@components/DatePicker';
import TimePicker from '@components/TimePicker';
import PlaceSelect from '@components/PlaceSelect';
import Subheading from '@components/Subheading';

import useSendForm from './useSendForm';

import s from './Form.module.scss';

const Form = ({ setAlert, closeAlert }) => {
  const { validationStatus } = useFormContext();

  const { errorMessage, submitHandler, snackbar } = useSendForm(setAlert, closeAlert);

  return (
    <div className={s.formWrapper}>
      <Header size="large">Бронирование переговорной</Header>

      <FormLayout className={s.formLayout}>
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

        <FooterButtons submitHandler={submitHandler} setAlert={setAlert} closeAlert={closeAlert} />
      </FormLayout>

      {snackbar}
    </div>
  );
};

Form.propTypes = {
  setAlert: PropTypes.func.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

export default Form;
