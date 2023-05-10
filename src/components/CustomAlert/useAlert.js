import { useState } from 'react';

const useAlert = () => {
  const [alert, setAlert] = useState(null);

  const closeAlert = () => {
    setAlert(null);
  };

  return { alert, setAlert, closeAlert };
};

export default useAlert;
