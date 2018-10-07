import { Action, Dispatch } from 'redux';
import { IBaseAction } from './index';
class UserActions {
    Constants = {
        LoginSuccess: 'login/success',
        LogoutSuccess: 'logout/success'
    };
    constructor() {
    }

    // constants here (Action Constants are always PascalCase)

    authenticate = (email: string, password: string) => {
        return (dispatch: Dispatch<Action>) => {
            // api_service.post(this.apiURLS.LOGIN, { email, password })
            //     .then((response: AxiosResponse) => {
            //         // fisrt data key is by axios
            //         dispatch(this.loginSuccess(response.data.data));

            //     })
            //     .catch((err) => {
            //         console.log(err);
            //         dispatch(this.logout);
            //     });
        };
    }

    loginSuccess = (data: { AuthToken: string }): IBaseAction<{ AuthToken: string }> => {
        return {
            type: this.Constants.LoginSuccess,
            payload: data
        };
    }

    logout = () => ({
        type: this.Constants.LogoutSuccess
    })
}

export let user_actions = new UserActions();
