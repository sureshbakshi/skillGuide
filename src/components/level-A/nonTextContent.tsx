import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppStore } from '../../reducers/index';
import { utility } from '../../utils/index';
import BreadCrumbs from '../breadCrumbs';

export class NonTextContent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div className='main-container'>
            <BreadCrumbs></BreadCrumbs>
            <div className='cotent-container'>
                <div className='row'>
                <div className='col-8'>
                    <div className='card'>{'lorem ipsum'}</div>
                </div>
                <div className='col-4'>
                {'lorem ipsum'}
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
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(NonTextContent));
