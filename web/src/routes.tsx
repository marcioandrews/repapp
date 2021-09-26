import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import WorkSpace from './pages/WorkSpace';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact component={Landing} />
                 <Route path="/WorkSpace" exact component={WorkSpace} />
            </Switch>
        </BrowserRouter>
    ); 
}

export default Routes;