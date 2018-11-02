import * as React from 'react';
import {AppConstants} from '../utils/constants';

import MetisMenu from 'react-metismenu';

export class Sidemenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <nav className='navigation'>
                <MetisMenu
                    ref={(r) => { AppConstants.menu1 = r; }}
                    activeLinkFromLocation
                    iconNameStateVisible='angle-up'
                    iconNameStateHidden='angle-down'
                    classNameItemHasActiveChild ='item-child-active'
                    classNameLinkHasActiveChild ='link-child-active'
                    classNameItemHasVisibleChild='open'
                    onSelected={(e) => {
                        //  e.preventDefault();
                    }}
                    content={AppConstants.menu1}
                    />
            </nav>
        );
    }
}

export default Sidemenu;
