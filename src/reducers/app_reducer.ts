import { app_actions } from './../actions/app_actions';
import _ from './../utils/lodash';

export interface IAppState {
    IsSideBarOpen: boolean;
    ActiveHTTPRequests: number;
    IsOnline: boolean;
}
const initialState: IAppState = {
    IsSideBarOpen: false,
    ActiveHTTPRequests: 0,
    IsOnline: false
};

export function App(state: IAppState = initialState, { type, payload }: any): IAppState {
    switch (type) {
        case 'persist/REHYDRATE': {
            if (payload.App) {
                payload.App.IsSideBarOpen = false;
                payload.App.ActiveHTTPRequests = 0;
                return _.extend({}, state, payload.App);
            } else {
                return _.extend({}, state);
            }
        }
        case app_actions.Constants.OpenSidebar:
            return _.extend({}, state, { IsSideBarOpen: true });

        case app_actions.Constants.CloseSidebar:
            return _.extend({}, state, { IsSideBarOpen: false });

        case app_actions.Constants.UpdateAppOnlineStatus:
            return _.extend({}, state, { IsOnline: payload });

        case app_actions.Constants.ShowLoader:
            return _.extend({}, state, { ActiveHTTPRequests: state.ActiveHTTPRequests + 1 });

        case app_actions.Constants.HideLoader:
            return _.extend({}, state, { ActiveHTTPRequests: state.ActiveHTTPRequests > 1 ? state.ActiveHTTPRequests - 1 : 0 });

        case app_actions.Constants.ResetStore:
            return _.extend({}, state, initialState);
        default:
            return state;
    }
}
