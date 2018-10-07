import { combineReducers } from 'redux';
import { App, IAppState } from './app_reducer';
import { ICustomerState, User } from './user_reducer';

export interface IAppStore {
    User: ICustomerState;
    App: IAppState;
}
const Reducer = combineReducers({
    User: User,
    App: App
});
export default Reducer;
