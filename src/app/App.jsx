import { AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Form from '@components/Form';

import s from './App.module.scss';

const App = () => {
  return (
    <AppRoot mode="partial">
      <div className={s.formContainer}>
        <Form />
      </div>
    </AppRoot>
  );
};

export default App;
