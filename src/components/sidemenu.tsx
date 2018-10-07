import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Action, Dispatch } from 'redux';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';
import './../../assets/scss/sidemenu.scss'
interface ISideMenuState {
    isSidemenuOpen?: boolean
}
interface ISIdeMenuProps {
    Dispatch?: Dispatch<Action>;
    IsLoggedIn?: boolean;
    history?: any
}
class SideMenuComponent extends React.Component<ISIdeMenuProps, ISideMenuState>{
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }
    services() {
        var nav = document.getElementById('sidemenu')
        nav.classList.toggle('hide')
    }
    navigateToLogin() {
        this.props.history.push('/')
    }
    selectedView() {
        return 'view'
    }
    activeList(id) {
        let sideMenuList = document.getElementsByClassName('view')
        for (let i = 0; i < sideMenuList.length; i++) {
            sideMenuList[i].classList.remove('selected')
        }
        let activeSidemenuList = document.getElementById(id)
        activeSidemenuList.classList.add('selected')
    }
    render() {
        return (

            <div className='sideMenu' id='sidemenu'>
                <div className='menu'>
                    <i className='icon-hambuger ' onClick={() => this.services()}></i>
                    <span>MENU</span>
                </div>
                <div onClick={() => this.activeList('about')} className={this.selectedView()} id='about'>
                    <i className='icon-info' />
                    <span>ABOUT</span>
                </div>
                <div onClick={() => this.activeList('services')} className={this.selectedView()} id='services'>
                    <i className='icon-settings' />
                    <span>SERVICES</span>
                </div>
                <div onClick={() => this.activeList('myAccount')} className={this.selectedView()} id='myAccount'>
                    <i className='icon-user2' />
                    <span>MY ACCOUBT</span>
                </div>
                <div onClick={() => this.activeList('business')} className={this.selectedView()} id='business'>
                    <i className='icon-grid' />
                    <span>BUSINESS PARTNERS</span>
                </div>
                <div onClick={() => this.activeList('contact')} className={this.selectedView()} id='contact'>
                    <i className='icon-user' />
                    <span>CONTACT US</span>
                </div>
                <div className='view'>
                    <i className='icon-power ' />
                    <span>LOG OUT</span>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state: IAppStore) {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(SideMenuComponent))