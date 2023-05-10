import { AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Form from '@components/Form';
import { FormContextProvider } from './context';

import s from './App.module.scss';

const App = () => {
  return (
    <AppRoot mode="partial">
      <FormContextProvider>
        <div className={s.formContainer}>
          <Form />
        </div>
      </FormContextProvider>
    </AppRoot>
  );
};

export default App;
