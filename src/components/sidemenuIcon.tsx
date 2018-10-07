import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Action, Dispatch } from 'redux';
import { IAppStore } from '../reducers/index';
import { utility } from '../utils/index';
import './../../assets/scss/sidemenu.scss'
let onClickOutside = require("react-onclickoutside").default;
import sideMenuComponent from './sidemenu'
interface ISideMenuState {
    isSideMenuOpen?: boolean,
    isHeaderHambugerShow?: boolean
}
interface ISIdeMenuProps {
    Dispatch?: Dispatch<Action>;
    IsLoggedIn?: boolean;
    history?: any
}
class SideMenuIcon extends React.Component<ISIdeMenuProps, ISideMenuState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isSideMenuOpen: false,
            isHeaderHambugerShow: true
        }
    }
    openSidemenu() {
        this.setState({ isSideMenuOpen: true, isHeaderHambugerShow: false })

    }
    myClickOutsideHandler = () => {
        this.setState({ isSideMenuOpen: false, isHeaderHambugerShow: true })
    }
    render() {
        var clickOutsideConfig = {
            handleClickOutside: () => {
                return this.myClickOutsideHandler;
            }
        }
        let ShowSideMenu = onClickOutside(sideMenuComponent, clickOutsideConfig);

        return (
            <div className='sidemenu-icon'>
                {this.state.isHeaderHambugerShow && <i className='icon-hambuger ' id='main-hambuger' onClick={() => this.openSidemenu()}></i>}
                {this.state.isSideMenuOpen && <ShowSideMenu />}
            </div >
        )
    }
}
function mapStateToProps(state: IAppStore) {
    return {

    }
}
export default connect(mapStateToProps, utility.mapDispatchToProps)(withRouter(SideMenuIcon))