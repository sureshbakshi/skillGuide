import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { NonTextContent } from './level-A/nonTextContent';
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
                <Route path='/accessibility/nonTextContent' component={NonTextContent} />
            </Switch>
        );
    }
}
export default Main;
