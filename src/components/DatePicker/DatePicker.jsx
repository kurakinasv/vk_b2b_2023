import { DateInput, FormItem, FormLayoutGroup, LocaleProvider } from '@vkontakte/vkui';

import { useFormContext } from '@app/context';
import { modileBreakpoint } from '@config/ui';
import { datePickerFieldName, formStatusEnum } from '@config/form';
import useStatus from '@hooks/useStatus';
import { updateObjectProperty } from '@utils/updateObjectProperty';
import Subheading from '@components/Subheading';

import s from './DatePicker.module.scss';

const DatePicker = () => {
  const { setFormState, formState, loading } = useFormContext();

  const { status, setStatus, changeStatusByFieldValue } = useStatus([datePickerFieldName], {
    [datePickerFieldName]: formState.date,
  });

  const changeHandler = (value) => {
    setFormState(updateObjectProperty(datePickerFieldName, value));

    const currentStatus = value ? formStatusEnum.DEFAULT : formStatusEnum.ERROR;
    setStatus(updateObjectProperty(datePickerFieldName, currentStatus));
  };

  return (
    <FormLayoutGroup mode="vertical">
      <Subheading title="Дата" />

      <FormItem className={s.datePickerContainer}>
        <LocaleProvider value="ru">
          <DateInput
            size={window.innerWidth > modileBreakpoint ? 'm' : 's'}
            value={formState[datePickerFieldName]}
            onChange={changeHandler}
            disablePast={true}
            disablePickers={true}
            showNeighboringMonth={true}
            className={s.datePicker}
            status={status.date}
            onBlur={changeStatusByFieldValue(datePickerFieldName)}
            disabled={loading}
          />
        </LocaleProvider>
      </FormItem>
    </FormLayoutGroup>
  );
};

export default DatePicker;
