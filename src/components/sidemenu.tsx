import * as React from 'react';
import { ReactNestedMenu } from 'react-nested-menu';
import { Link } from 'react-router-dom';

export class Sidemenu extends React.Component<any, any> {
    private menu={
        levelA:false,
        nonTextContent: false,
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
    linkTransformer = (menuItem) => {

        return (
            <Link to={menuItem.url}>{ menuItem.title }</Link>
        )
    }
    render() {
        console.log('render')
        const menu = [
            {
                id: 1,
                title: 'Home',
                url: '/'
            },
            {
                id: 2,
                title: 'About Us',
                url: '/about-us'
            },
            {
                title: 'Team',
                url: '/team',
                children: [
                    {
                        id: 8,
                        title: 'Tim Drake',
                        url: '/tim-drake'
                    },
                    {
                        id: 9,
                        title: 'Jason Todd',
                        url: '/jason-todd'
                    },
                    {
                        id: 10,
                        title: 'Richard Grayson',
                        url: '/richard-grayson'
                    }
                ]
            },
            {
                title: 'Services',
                url: '/services',
                children: [
                    {
                        id: 5,
                        title: 'Web Development',
                        url: '/web-development'
                    },
                    {
                        id: 6,
                        title: 'UI Design',
                        url: '/ui-design'
                    },
                    {
                        id: 7,
                        title: 'Copywriting',
                        url: '/copywriting'
                    }
                ]
            },
            {
                id: 4,
                title: 'Contact',
                url: '/contact'
            },
            {
                title: 'Social',
                url: '/social',
                children: [
                    {
                        id: 11,
                        title: 'Twitter',
                        url: '/twitter'
                    },
                    {
                        id: 12,
                        title: 'Facebook',
                        url: '/facebook'
                    }
                ]
            }
        ];
        return (
            <nav className='navigation'>
                {/* <ul className='list'>
                    <li className={this.menu.levelA ? 'list-item active' : 'list-item'}>
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
                </ul> */}
                <ReactNestedMenu
                    navParentClassname='vertical menu nested'
                    navTopLevelParentClassname='vertical menu'
                    navChildClassname='child'
                    linkTransformer={this.linkTransformer}
                    menuData={menu}/>
            </nav>
        );
    }
}

export default Sidemenu;
