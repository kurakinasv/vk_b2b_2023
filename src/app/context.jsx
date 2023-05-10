import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { defaultFormValue, formStatusEnum } from '@config/form';

const FormContext = createContext(defaultFormValue);

export const useFormContext = () => useContext(FormContext);

export const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState(defaultFormValue);
  const [validationStatus, setValidationStatus] = useState(formStatusEnum.DEFAULT);
  const [loading, setLoading] = useState(false);

  return (
    <FormContext.Provider
      value={{
        formState,
        setFormState,
        validationStatus,
        setValidationStatus,
        loading,
        setLoading,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
