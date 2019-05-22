import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/login';
import KitchenInterf from './components/kitchenInterf';
import WaitersInterf from './components/waitersInterf';
import './index.css';
import * as ROUTES from './constants/routes';


const App = () => {
  return (
      <Router>
        <div>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.WAITERS} component={WaitersInterf}/>
          <Route exact path={ROUTES.KITCHEN} component={KitchenInterf}/>
        </div>
      </Router>
    
  );
};

export default App;