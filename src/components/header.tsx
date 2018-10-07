import * as React from 'react';
import '../../assets/scss/main.scss'

let logo = require('./../../assets/images/biztrack.svg')

export class Header extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div className='header'>
                <img src={logo} />
            </div>
        )
    }
}


export default Header;
