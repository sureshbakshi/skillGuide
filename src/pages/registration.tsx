import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';

interface IRegistrationState {
}
interface IRegistrationProps {
}
class Registration extends React.Component<IRegistrationProps, IRegistrationState> {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
    public refs: {
        name: HTMLInputElement;
        email: HTMLInputElement;
        Password: HTMLInputElement;
        confirmPwd: HTMLInputElement;
    };
    registrations(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className='mainContainer'>
                <div className='wrapper'>
                    <div className='header'></div>
                    <div className='login-component'>
                        <div className='loginContent'>
                            <div className='logoImg regLogo'></div>
                            <form className='loginForm'>
                                <div className='inputDiv'>
                                    <i className='icon-user2' />
                                    <input className='input-field' type='text' ref='userId' placeholder='User' />
                                </div>
                                <div className='inputDiv'>
                                    <i className='icon-mail' />
                                    <input type='text' className='input-field' placeholder='Email' ref='email' />
                                </div>
                                <div className='inputDiv'>
                                    <i className='icon-lock' />
                                    <input type='password' className='input-field' placeholder='Password' ref='password' />
                                </div>
                                <div className='inputDiv'>
                                    <i className='icon-lock' />
                                    <input type='password' className='input-field' placeholder='Confirem Password' ref='confirmPwd' />
                                </div>
                                <div className='bizButton smBtn'>
                                    <button onClick={(e) => this.registrations(e)}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
function mapStateToProps(state: IAppStore): {} {
    console.log(state);
    return {
    };
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(Registration));
