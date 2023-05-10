import { CustomSelect, FormItem, FormLayoutGroup } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import { useFormContext } from '@app/context';
import { formStatusEnum } from '@config/form';
import { fieldNames, timePickerSelectData } from '@config/timePicker';
import useStatus from '@hooks/useStatus';
import { updateObjectProperty } from '@utils/updateObjectProperty';

import s from './TimePicker.module.scss';

const TimePicker = ({ suphead, id }) => {
  const timeFieldName = `time_${id}`;

  const { setFormState, formState } = useFormContext();

  const { status, setStatus, changeStatusByFieldValue } = useStatus(
    fieldNames,
    formState[timeFieldName]
  );

  const changeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormState(
      updateObjectProperty(timeFieldName, { ...formState[timeFieldName], [name]: value })
    );

    const currentStatus = value ? formStatusEnum.DEFAULT : formStatusEnum.ERROR;
    setStatus(updateObjectProperty(name, currentStatus));
  };

  return (
    <FormLayoutGroup mode="horizontal" className={s.timePickerWrapper} segmented>
      {timePickerSelectData.map(({ name, localeName, options }, i) => (
        <FormItem key={name} bottom={i === 0 ? suphead : ''}>
          <CustomSelect
            name={name}
            placeholder={localeName}
            options={options}
            selectType="default"
            allowClearButton
            searchable
            onChange={changeHandler}
            status={status[name]}
            onClose={changeStatusByFieldValue(name)}
            value={formState[timeFieldName] ? formState[timeFieldName][name] : ''}
            required
          />
        </FormItem>
      ))}
    </FormLayoutGroup>
  );
};

TimePicker.propTypes = {
  suphead: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TimePicker;
