import * as React from 'react';
import { Link } from 'react-router-dom';
export class Sidemenu extends React.Component<any, any> {
    private menu={
        levelA:false,
        nonTextContent:false,
        navigation:false,
        section:false
    }
    constructor(props: any) {
        super(props);
    }
    toggleMenu(menuName){
        this.menu[menuName] =!this.menu[menuName];
        // this.setState({});
    // console.log('menustate',this.menu)
    }
    render() {
        console.log('render')
        return (
            <nav className='navigation'>
                <ul className='list'>
                    <li className={this.menu.levelA ? 'list-item active': 'list-item'}>
                        <Link className='dropdown-list' to={`/accessibility`} onClick={() => this.toggleMenu('levelA')}>Level A <i className='float-right fas fa-angle-down'></i></Link>
                        <ul className='list'>
                            <li className='list-item '><Link className={this.menu.nonTextContent ? ' active': ''} to={`/accessibility/nonTextContent`} onClick={() => this.toggleMenu('nonTextContent')}>Non-Text Content</Link></li>
                            <li className='list-item'><Link className={this.menu.navigation ? ' active': ''}  to={`/navigation`}  onClick={() => this.toggleMenu('navigation')}>Navigation</Link></li>
                            <li className='list-item'><Link className={this.menu.section ? ' active': ''} to={`/section`}  onClick={() => this.toggleMenu('section')}>section</Link></li>
                        </ul>
                    </li>
                    <li className='list-item '>
                        <Link className='active' to={`/accessibility`}>Level AA</Link>
                        <ul className='list'>
                            <li className='list-item '><Link className='active' to={`/accessibility/nonTextContent`}>Non-Text Content</Link></li>
                            <li className='list-item'><Link to={`/Navigation`} >Navigation</Link></li>
                            <li className='list-item'><Link to={`/section`} >section</Link></li>
                        </ul>
                    </li>
                    <li className='list-item '>
                        <Link className='active' to={`/accessibility`}>Level AAA</Link>
                        <ul className='list'>
                            <li className='list-item '><Link className='active' to={`/accessibility/nonTextContent`}>Non-Text Content</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Sidemenu;
