import { useCallback, useEffect, useMemo, useState } from 'react';

import { useFormContext } from '@app/context';
import { formStatusEnum } from '@config/form';
import { updateObjectProperty } from '@utils/updateObjectProperty';

const useStatus = (fieldNames, fieldsData) => {
  const { validationStatus } = useFormContext();

  const defaultFields = useMemo(
    () => fieldNames.reduce((acc, curr) => ({ ...acc, [curr]: formStatusEnum.DEFAULT }), {}),
    [fieldNames]
  );

  const [status, setStatus] = useState(defaultFields);

  useEffect(() => {
    if (validationStatus === formStatusEnum.ERROR) {
      for (const fieldName in status) {
        const fieldValue = fieldsData ? fieldsData[fieldName] : '';
        const toAdd = fieldValue ? formStatusEnum.DEFAULT : formStatusEnum.ERROR;
        setStatus(updateObjectProperty(fieldName, toAdd));
      }
    }

    if (validationStatus === formStatusEnum.DEFAULT) {
      for (const fieldName in status) {
        setStatus(updateObjectProperty(fieldName, formStatusEnum.DEFAULT));
      }
    }
  }, [validationStatus]);

  const changeStatusByFieldValue = useCallback(
    (fieldName) => () => {
      const fieldValue = fieldsData ? fieldsData[fieldName] : '';

      if (!fieldValue) {
        setStatus(updateObjectProperty(fieldName, formStatusEnum.ERROR));
      } else {
        setStatus(updateObjectProperty(fieldName, formStatusEnum.DEFAULT));
      }
    },
    [fieldsData]
  );

  return { status, setStatus, changeStatusByFieldValue };
};

export default useStatus;
