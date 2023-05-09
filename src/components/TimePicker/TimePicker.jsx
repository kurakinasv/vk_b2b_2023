import { CustomSelect, FormItem, FormLayoutGroup } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

const TimePicker = ({ suphead }) => {
  const minutes = Array(60)
    .fill(null)
    .map((_, i) => ({
      value: i,
      label: String(i),
    }));

  const hours = Array(17)
    .fill(null)
    .map((_, i) => ({
      value: i + 7,
      label: String(i + 7),
    }));

  return (
    <div style={{ flexGrow: 1 }}>
      <FormLayoutGroup mode={'horizontal'} segmented>
        <FormItem bottom={suphead}>
          <CustomSelect
            placeholder="Часы"
            options={hours}
            selectType="default"
            allowClearButton
            searchable
          />
        </FormItem>

        <FormItem>
          <CustomSelect
            placeholder="Минуты"
            options={minutes}
            selectType="default"
            allowClearButton
            searchable
          />
        </FormItem>
      </FormLayoutGroup>
    </div>
  );
};

TimePicker.propTypes = {
  suphead: PropTypes.string.isRequired,
};

export default TimePicker;
