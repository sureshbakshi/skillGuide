import * as React from 'react';
let logo = require('./../../assets/images/skillCenter.png');
import { Link } from 'react-router-dom';
import Sidemenu from '../components/sidemenu';

export class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div>
            <header className='header'>
            <Link to={'/'}><img src={logo} /></Link>
            </header>
            <Sidemenu></Sidemenu>
            </div>
        );
    }
}

export default Header;
