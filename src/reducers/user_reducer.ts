import { user_actions } from './../actions/user_actions'
const extend = require('lodash/extend')

interface ICustoimerInfo {
    FirstName: string
    LastName: string
    Email: string
    UserName: string
    UserId: number | string
}

interface IAuthInfo {
    IsLoggedIn: boolean
    Token: string
}

export interface ICustomerState {
    Info: ICustoimerInfo,
    Auth: IAuthInfo
}


const initialState: ICustomerState = {
    Info: {
        Email: '',
        FirstName: '',
        LastName: '',
        UserName: '',
        UserId: ''
    },
    Auth: {
        IsLoggedIn: false,
        Token: ''
    }
}

export function User(state = initialState, { type, payload }: any) {
    switch (type) {
        case 'persist/REHYDRATE': {
            if (payload.User) {
                return extend({}, state, payload.User);
            } else {
                return extend({}, state);
            }
        }
        case user_actions.Constants.LoginSuccess:
            return extend({}, state, {
                Info: {
                    Email: payload.user.email,
                    FirstName: payload.user.fName,
                    LastName: payload.user.lName,
                    UserName: payload.user.uName,
                    UserId: payload.user.uId
                },
                Auth: {
                    IsLoggedIn: true,
                    Token: payload.auth.token
                }
            });

        case user_actions.Constants.LogoutSuccess:
            return extend({}, initialState);

        default:
            return state;
    }
}



