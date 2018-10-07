import * as React from 'react';
import { MainContentCard } from '../components/mainContentCard';
import { withRouter } from 'react-router';

export class Entreprenurs extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    goToSetup(): any {
       this.props.goToSetup;
    }
    render(): any {
        return (
            <MainContentCard
                headerTitle='Entreprenurs'
                btnValue='submit'
                headerImgClassName='icon-advisor'
                goToSetup = {this.goToSetup()}
            />
        );
    }
};


export default (withRouter(Entreprenurs));