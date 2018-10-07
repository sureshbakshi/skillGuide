import * as React from 'react';
import Header from './header';
import Main from './main';
import SideMenuIcon from './sidemenuIcon'
class App extends React.Component<{}, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainContainer appBg">
                <div className='headerWrapper'>
                <Header />
                <SideMenuIcon />
                </div>
                <Main />
            </div >
        );
    }
}
export default App;
