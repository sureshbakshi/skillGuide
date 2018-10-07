import * as React from 'react';
import '../../assets/scss/setupMangeGrow.scss'

export class SetupMangeGrow extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render(): any {
        return (
            <div className="setupMangeGrow container">
                <div className="card hoverable" >
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-settingschange"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Setup</span>
                        </div>
                        <div className="cardContent">
                            <span>Got an amazing thought,make it a great business.</span>
                        </div>
                    </div>
                </div>
                <div className="card hoverable" >
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-setting"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Manage</span>
                        </div>
                        <div className="cardContent">
                            <span>Got an Run your business like a boss.</span>
                        </div>
                    </div>
                </div>
                <div className="card hoverable" >
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-grow"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Grow</span>
                        </div>
                        <div className="cardContent">
                            <span>When business is good ,its time to expand.</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};
export default SetupMangeGrow;