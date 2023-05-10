import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { defaultFormValue, formStatusEnum } from '@config/form';

const FormContext = createContext(defaultFormValue);

export const useFormContext = () => useContext(FormContext);

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState(defaultFormValue);
  const [error, setError] = useState(false);
  const [validationStatus, setValidationStatus] = useState(formStatusEnum.DEFAULT);

  return (
    <FormContext.Provider
      value={{ formState, setFormState, error, setError, validationStatus, setValidationStatus }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
