import * as React from 'react';
import { render } from 'react-dom';
const { Provider } = require('react-redux');
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Registration from './pages/registration';
import { initReduxStore, store } from './store/index';

import '../assets/scss/base.scss';
initReduxStore((err: any, state: any) => {
  if (err) {
  } else {
    renderApp();
  }
});
function renderApp():
  React.Component<any, React.ComponentState> | Element | void {
  let rootElement = document.getElementById('root');
  render(
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/registration' component={Registration} />
            <App />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>,
    (rootElement as Element)
  );
}
