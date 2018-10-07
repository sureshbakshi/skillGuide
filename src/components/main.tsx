import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home';
import { Entreprenurs } from '../pages/entreprenurs';
import { BussinesPartners } from '../pages/bussinesPartner';
import { Investors } from '../pages/investor';
import { Advisors } from '../pages/advisor';
import { SetupMangeGrow } from '../pages/setupMangeGrow';
interface IMainProps {
    exact?: any
}

class Main extends React.Component<IMainProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/entrepreneurs' component={Entreprenurs} />
                <Route path='/businessPartners' component={BussinesPartners} />
                <Route path='/investors' component={Investors} />
                <Route path='/advisors' component={Advisors} />
                <Route path='/setup' component={SetupMangeGrow} />
            </Switch>
        );
    }
}
export default Main;
