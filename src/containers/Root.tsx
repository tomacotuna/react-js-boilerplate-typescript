import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing Page/index';
import Login from './pages/Login Page/index';
import Input from './pages/Input Page/index';
import Result from './pages/Result Page/index';
import NoMatch from './pages/404/index';

class Root extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route path="/" exact={true} component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/input" component={Input} />
            <Route path="/result" component={Result} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;
