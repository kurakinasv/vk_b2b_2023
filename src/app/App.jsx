import { AppRoot, SplitLayout } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Form from '@components/Form';
import { useAlert } from '@components/CustomAlert';
import { FormContextProvider } from './context';

import s from './App.module.scss';

const App = () => {
  const { alert, setAlert, closeAlert } = useAlert();

  return (
    <AppRoot mode="partial">
      <FormContextProvider>
        <SplitLayout popout={alert}>
          <div className={s.formContainer}>
            <Form setAlert={setAlert} closeAlert={closeAlert} />
          </div>
        </SplitLayout>
      </FormContextProvider>
    </AppRoot>
  );
};

export default App;
