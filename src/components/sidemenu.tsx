import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/main.scss';
export class Sidemenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <nav className='navigation'>
                <ul className='list'>
                    <li className='list-item '><Link className='active' to={`/users`} >Heading</Link></li>
                    <li className='list-item'><Link to={`/Navigation`} >Navigation</Link></li>
                    <li className='list-item'><Link to={`/section`} >section</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Sidemenu;
