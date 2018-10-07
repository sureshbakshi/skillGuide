import * as React from 'react';
import '../../assets/scss/mainContentCard.scss'
import { BasicInformationForm } from './basicInformationForm';
export class MainContentCard extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render(): any {
        return (
            <div className="innerContent">
                <div className="head">
                    <div className="headerImage">
                        <span className={this.props.headerImgClassName}></span>
                    </div>
                    <div className="headerTitle">
                        <span>{this.props.headerTitle}</span>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <BasicInformationForm />
                    </div>
                </div>
            </div>
        );
    }
};
export default MainContentCard;