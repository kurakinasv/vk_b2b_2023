import ReactDOM from 'react-dom';
import { AdaptivityProvider, ConfigProvider, Platform } from '@vkontakte/vkui';

import App from '@app/App.jsx';

import './index.scss';

ReactDOM.render(
  <ConfigProvider appearance="light" platform={Platform.VKCOM}>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById('root')
);
