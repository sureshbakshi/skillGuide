import * as React from 'react';
import './../../assets/scss/regSucess.scss'

export class RegistrationSucess extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }
    close() {
        this.props.closePopUp()
    }
    render() {
        return (
            <div className='regSucess'>
                <span className='cancel-btn' onClick={() => this.close()}>X</span>
                <div className='header-txt'>
                    <span>Congratulations !!!</span>
                    <span>Registration Successfull.</span>

                </div>
                <span className='msg-txt'>Make your startup, well established firm</span>
                <div className='bizButton smBtn'>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}


export default RegistrationSucess;