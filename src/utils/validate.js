import { requiredFields } from '@config/form';

export const validate = (toValidate) => {
  let isValid = true;
  let message = '';

  const observeFields = (obj) => {
    for (const key in obj) {
      const value = obj[key];

      if (typeof value === 'object' && value !== null) {
        observeFields(value);
        continue;
      }

      if (!value && requiredFields.includes(key)) {
        message = 'Необходимо корректно заполнить обязательные поля';
        isValid = false;
        console.error(message, key, value);
        return;
      }
    }
  };

  if (toValidate.time_start && toValidate.time_end) {
    const startMinutes = toValidate.time_start.hours * 60 + toValidate.time_start.minutes;
    const endMinutes = toValidate.time_end.hours * 60 + toValidate.time_end.minutes;

    if (startMinutes >= endMinutes) {
      message = 'Время конца брони меньше или равно времени начала';
      isValid = false;
      console.error(message);
    }
  }

  observeFields(toValidate);

  return { isValid, message };
};
