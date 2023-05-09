import {
  Button,
  ButtonGroup,
  FormItem,
  FormLayout,
  FormLayoutGroup,
  Header,
  Textarea,
} from '@vkontakte/vkui';

import DatePicker from '../DatePicker';
import TimePicker from '../TimePicker';
import PlaceSelect from '../PlaceSelect';
import Subheading from '../Subheading';
import { modileBreakpoint } from '@config/ui';

import s from './Form.module.scss';

const Form = () => {
  return (
    <div className={s.formWrapper}>
      <Header size="large">Бронирование переговорной</Header>

      <FormLayout className={s.formLayout}>
        <PlaceSelect />

        <FormLayoutGroup mode="vertical">
          <Subheading title="Дата" />
          <FormItem className={s.datePickerContainer}>
            <DatePicker />
          </FormItem>
        </FormLayoutGroup>

        <FormLayoutGroup mode="vertical">
          <Subheading title="Время" />
          <div className={s.timeFields}>
            <TimePicker suphead="Время начала" />
            <TimePicker suphead="Время конца" />
          </div>
        </FormLayoutGroup>

        <FormLayoutGroup mode="vertical">
          <Subheading title="Комментарий" />
          <FormItem>
            <Textarea />
          </FormItem>
        </FormLayoutGroup>

        <ButtonGroup
          mode="horizontal"
          gap={window.innerWidth > modileBreakpoint ? 'm' : 's'}
          stretched
          className={s.buttonGroup}
        >
          <Button size="l" appearance="neutral" stretched>
            Очистить
          </Button>
          <Button size="l" appearance="accent" stretched>
            Отправить
          </Button>
        </ButtonGroup>
      </FormLayout>
    </div>
  );
};

export default Form;
