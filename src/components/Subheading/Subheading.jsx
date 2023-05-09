import { Subhead } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

import s from './Subheading.module.scss';

const Subheading = ({ title }) => {
  return (
    <div className={s.subheadContainer}>
      <Subhead weight="1">{title}</Subhead>
    </div>
  );
};

Subheading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subheading;
