import * as React from 'react';
import { render } from 'react-dom';
const { Provider } = require('react-redux');
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { initReduxStore, store } from './store/index';
import App from './components/app';
import Login from './pages/login';
import Registration from './pages/registration'
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
            <Route exact path='/' component={Login} />
            <Route path='/registration' component={Registration} />
            <App />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>,
    (rootElement as Element)
  );
}
