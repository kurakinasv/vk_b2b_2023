import { ButtonGroup, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import { useFormContext } from '@app/context';
import { defaultFormValue, formStatusEnum } from '@config/form';
import { modileBreakpoint } from '@config/ui';
import CustomAlert from '@components/CustomAlert';

import s from './FooterButtons.module.scss';

const FooterButtons = ({ submitHandler, setAlert, closeAlert }) => {
  const { setFormState, setValidationStatus, loading } = useFormContext();

  const clearFormData = () => {
    setFormState(defaultFormValue);
    setValidationStatus(formStatusEnum.DEFAULT);
  };

  const openClearingAlert = () => {
    setAlert(
      <CustomAlert
        closeAlert={closeAlert}
        onDestructive={clearFormData}
        text="Вы уверены, что хотите очистить форму?"
        header="Очистка формы"
        onDestructiveText="Очистить"
      />
    );
  };

  return (
    <ButtonGroup
      mode="horizontal"
      gap={window.innerWidth > modileBreakpoint ? 'm' : 's'}
      stretched
      className={s.buttonGroup}
    >
      <Button
        size="l"
        appearance="neutral"
        stretched
        onClick={openClearingAlert}
        disabled={loading}
      >
        Очистить
      </Button>
      <Button
        size="l"
        appearance="accent"
        stretched
        onClick={submitHandler}
        loading={loading}
        disabled={loading}
      >
        Отправить
      </Button>
    </ButtonGroup>
  );
};

FooterButtons.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  closeAlert: PropTypes.func.isRequired,
};

export default FooterButtons;
