import { useState } from 'react';

import { useFormContext } from '@app/context';
import CustomAlert from '@components/CustomAlert';
import { formStatusEnum } from '@config/form';
import { validate } from '@utils/validate';
import useSnackbar from '@hooks/useSnackbar';

const useSendForm = (setAlert, closeAlert) => {
  const { formState, setValidationStatus, setLoading } = useFormContext();

  const [errorMessage, setErrorMessage] = useState('');

  const { snackbar, openSnackbar } = useSnackbar();

  const sendForm = (data) => {
    console.log('Отправка данных формы...');
    setLoading(true);

    setTimeout(() => {
      const jsonData = JSON.stringify(data);
      console.log('Отправлено:');
      console.log(jsonData);

      setLoading(false);
      openSnackbar('Форма успешно отправлена');
    }, 1000);
  };

  const submitHandler = () => {
    setValidationStatus(formStatusEnum.DEFAULT);
    const { isValid, message } = validate(formState);

    if (isValid) {
      setAlert(
        <CustomAlert
          closeAlert={closeAlert}
          onDestructive={() => sendForm(formState)}
          text="Вы уверены, что хотите отправить форму?"
          header="Отправка формы"
          onDestructiveText="Отправить"
        />
      );
    } else {
      setErrorMessage(message);
      setValidationStatus(formStatusEnum.ERROR);
    }
  };

  return { errorMessage, submitHandler, snackbar };
};

export default useSendForm;
