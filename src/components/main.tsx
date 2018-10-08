import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
interface IMainProps {
    exact?: any;
}

class Main extends React.Component<IMainProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route path='/home' component={Home} />
            </Switch>
        );
    }
}
export default Main;
