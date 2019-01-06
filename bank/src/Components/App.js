import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PayAnyCardForm from './PayAnyCardForm';
import PayOwnInternetBankForm from './PayOwnInternetBankForm';
import RequestPayForm from './RequestPayForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path='/' component={PayAnyCardForm}/>
            <Route path='/payOwn' component={PayOwnInternetBankForm}/>
            <Route path="/requestPay" component={RequestPayForm} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
