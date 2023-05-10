import { Alert } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

const CustomAlert = ({ closeAlert, onDestructive, text, header, onDestructiveText }) => {
  return (
    <Alert
      actions={[
        {
          title: 'Отмена',
          autoClose: true,
          mode: 'cancel',
        },
        {
          title: onDestructiveText,
          autoClose: true,
          mode: 'destructive',
          action: onDestructive,
        },
      ]}
      actionsLayout="horizontal"
      onClose={closeAlert}
      header={header}
      text={text}
    />
  );
};

CustomAlert.propTypes = {
  closeAlert: PropTypes.func.isRequired,
  onDestructive: PropTypes.func.isRequired,
  onDestructiveText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  header: PropTypes.string,
};

export default CustomAlert;
