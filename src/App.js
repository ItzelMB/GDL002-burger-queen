import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/login';
import KitchenInterf from './components/KitchenInterf/kitchenInterf';
import WaitersInterf from './components/WaitersInterf/waitersInterf';
import './index.css';
import * as ROUTES from './constants/routes';
import OrderStatus from './components/OrderStatus/orderStatus';


const App = () => {
  return (
      <Router>
        <div>
          <Route exact path={ROUTES.LOGIN} component={Login}/>
          <Route exact path={ROUTES.WAITERS} component={WaitersInterf}/>
          <Route exact path={ROUTES.KITCHEN} component={KitchenInterf}/>
          <Route exact path={ROUTES.ORDERS} component={OrderStatus}/>
        </div>
      </Router> 
  );
};

export default App;