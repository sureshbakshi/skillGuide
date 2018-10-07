import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';
import { ModalComponent } from './../components/modal'
import { RegistrationSucess } from '././registrationSuccess'
import './../../assets/scss/authenticate.scss'


interface IRegistrationState {
    isModalOpen?: boolean
}
interface IRegistrationProps {
    open?: any;
    onClose?: any
}
class Registration extends React.Component<IRegistrationProps, IRegistrationState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }
    public refs: {
        name: HTMLInputElement;
        email: HTMLInputElement;
        Password: HTMLInputElement;
        confirmPwd: HTMLInputElement;
    }
    registrations(e) {
        e.preventDefault()
        let data = {
            // name: this.refs.name.value.trim(),
            // email: this.refs.email.value.trim(),
            // Password: this.refs.Password.value.trim(),
            // confirmPwd: this.refs.confirmPwd.value.trim()
        }
        console.log(data)
        this.setState({ isModalOpen: true })
    }
    closeModal() {
        this.setState({ isModalOpen: false })
    }
    render() {
        return (
            <div className='mainContainer appBg'>
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
                <ModalComponent
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.closeModal()}>
                    <RegistrationSucess
                        closePopUp={() => this.closeModal()}
                    />
                </ModalComponent>

            </div>
        )
    }
}
function mapStateToProps(state: IAppStore): {} {
    console.log(state)
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(Registration))



