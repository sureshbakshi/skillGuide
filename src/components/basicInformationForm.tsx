import * as React from 'react';
import '../../assets/scss/main.scss'
import '../../assets/scss/basicInfoForm.scss'
import { withRouter } from 'react-router';


export class BasicInformationForm extends React.Component<any, any> {
    handleSubmit: any;
    constructor(props: any) {
        super(props);
    }
    goToSetup(){
        this.props.history.push('/setup')
    }
    render(): any {
        return (
            <div className="basicInfoForm">
                <div className='heading'>Basic Informaion</div>
                <div className='formContent'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref='BusinessName' placeholder='Business name' />
                        <input type="text" ref='SocialMediaChannels' placeholder='Social Media Channels' />
                        <input type="text" ref='Industry' placeholder='Industry' />
                        <input type="text" ref='CompanyLogo/Photo' placeholder='Company Logo/Photo' />
                        <input type="text" ref='CompanySize' placeholder='Company Size' />
                        <input type="text" ref='Designation' placeholder='Designation' />
                        <input type="text" ref='BusinessEmail' placeholder='Business Email' />
                        <input type="text" ref='CompanyDiscription' placeholder='CompanyDiscription' />
                        <input type="text" ref='ContactNumber' placeholder='Contact Number' />
                        <input type="text" ref='WebApp' placeholder='Web App ' />
                        <input type="text" ref='Website' placeholder='Website' />
                    </form>
                </div>
                <div className='bizButton mdBtn'>
                    <button type="submit" value="Submit" onClick = {() => this.goToSetup()}>Submit</button>
                </div>
            </div>
        );
    }
};


export default (withRouter(BasicInformationForm));