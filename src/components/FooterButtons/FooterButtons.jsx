import { ButtonGroup, Button } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import { useFormContext } from '@app/context';
import { defaultFormValue, formStatusEnum } from '@config/form';
import { modileBreakpoint } from '@config/ui';

import s from './FooterButtons.module.scss';

const FooterButtons = ({ submitHandler }) => {
  const { setFormState, setValidationStatus, loading } = useFormContext();

  const clearFormData = () => {
    setFormState(defaultFormValue);
    setValidationStatus(formStatusEnum.DEFAULT);
  };

  return (
    <ButtonGroup
      mode="horizontal"
      gap={window.innerWidth > modileBreakpoint ? 'm' : 's'}
      stretched
      className={s.buttonGroup}
    >
      <Button size="l" appearance="neutral" stretched onClick={clearFormData} disabled={loading}>
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
};

export default FooterButtons;
