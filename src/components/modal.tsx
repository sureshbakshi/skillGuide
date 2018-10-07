import * as React from 'react';
import './../../assets/scss/modal.scss'

export class ModalComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    close() {
        this.props.onClose();
    }
    render() {
        return (
            <div>
                <div className={this.props.isOpen ? "biZmodal show" : "biZmodal hide"} id="myModal" role="dialog">
                    {this.props.children}
                </div>
                {this.props.isOpen &&
                    <div className='backdrop' onClick={() => this.close()} />
                }
            </div>
        )
    }
}


export default ModalComponent;