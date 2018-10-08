import * as React from 'react';
import '../../assets/scss/main.scss';
let logo = require('./../../assets/images/logo.svg');
import { Link } from 'react-router-dom';
import Sidemenu from '../components/sidemenu';
// let newlogo = require('./../../assets/images/logo2.jpgsvg');

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
