import { useState } from 'react';
import { DateInput, LocaleProvider } from '@vkontakte/vkui';

import { modileBreakpoint } from '@config/ui';

import s from './DatePicker.module.scss';

const DatePicker = () => {
  const [value, setValue] = useState(null);

  return (
    <div className={s.datePickerContainer}>
      <LocaleProvider value="ru">
        <DateInput
          size={window.innerWidth > modileBreakpoint ? 'm' : 's'}
          value={value}
          onChange={setValue}
          disablePast={true}
          disablePickers={true}
          showNeighboringMonth={true}
          className={s.datePicker}
        />
      </LocaleProvider>
    </div>
  );
};

export default DatePicker;
