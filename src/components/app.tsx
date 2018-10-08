import * as React from 'react';
import Header from './header';
import Main from './main';
class App extends React.Component<{}, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='mainContainer '>
                <div className='headerWrapper'>
                    <Header />
                </div>
                <Main />
            </div >
        );
    }
}
export default App;
