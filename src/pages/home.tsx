import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../assets/scss/home.scss';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }
    render(): any {
        return (
            <div className='homeContent container'>
            </div>
        );
    }
}
function mapStateToProps(state: IAppStore): {} {
    console.log(state);
    return {
    };
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(Home));
