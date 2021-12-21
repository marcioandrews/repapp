import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import WorkSpace from './pages/WorkSpace';

function Routes() {
    return (
        <BrowserRouter >
            <Switch >
                <Route path="/" exact component={Landing} />
                <Route  path="/login" component={Login} />

                <Route path="/profile" component={WorkSpace} />
                {/* <ProtectedLayout>
                    <Route path="/workspace" component={WorkSpace}/>
                </ProtectedLayout> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;