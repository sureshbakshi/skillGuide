import * as React from 'react';
import '../../assets/scss/home.scss'

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    goToEntrepreneurs() {
        this.props.history.push('/entrepreneurs');
    }
    goToBusinessPartners() {
        this.props.history.push('/businessPartners');
    }
    goToInvestors() {
        this.props.history.push('/investors');
    }
    goToAdvisors() {
        this.props.history.push('/advisors');
    }
    render(): any {
        return (
            <div className="homeContent container">
                <div className="card hoverable entrep col-xs-3 " onClick={() => this.goToEntrepreneurs()} >
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-advisor"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Entrepreneurs</span>
                        </div>
                    </div>
                </div>
                <div className="card hoverable bussinesPartnr col-xs-3" onClick={() => this.goToBusinessPartners()}>
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-bussinesPartner"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Business Partners</span>
                        </div>
                    </div>
                </div>
                <div className="card hoverable investors col-xs-3" onClick={() => this.goToInvestors()}>
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-investor"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Investors</span>
                        </div>
                    </div>
                </div>
                <div className="card hoverable advisors col-xs-3" onClick={() => this.goToAdvisors()}>
                    <div className="innerContent">
                        <div className="imgContent">
                            <i className="icon-idea"></i>
                        </div>
                        <div className="cardTitle">
                            <span>Advisors</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Home;