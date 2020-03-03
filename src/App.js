import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Intro from './components/UI/Intro/lntro';
import ThankYou from './components/UI/ThankYou/ThankYou';
// import notFoundPage from './components/UI/notFoundPage/notFoundPage';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/main';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/BurgerBuilder/Checkout/Checkout');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncContactUs = asyncComponent(() => {
  return import('./components/UI/ThankYou/ContactUs/ContactUs');
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  };

   render() {
     let routes = (
       <Switch>
         <Route path="/" exact component={Intro} />  
         <Route path="/auth" component={asyncAuth} />
         <Route path="/contact-us" component={asyncContactUs} />
          <Route path="/burger-builder" render={(routeProps) => <BurgerBuilder {...routeProps} />} />   
          <Redirect to="/burger-builder" />
       </Switch>
     );

     if(this.props.isAuth) {
       routes = (
         <Switch>
          <Route path="/" exact component={Intro} />
         <Route path="/auth" component={asyncAuth} /> 
         <Route path="/logout" component={Logout} />
        <Route path="/burger-builder" render={(routeProps) => <BurgerBuilder {...routeProps} />} />   
        <Route path="/contact-us" component={asyncContactUs} />
        <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/thank-you" component={ThankYou} />
        <Redirect to="/burger-builder" />
        </Switch>
       );
     }
    return (
      <div>
        <Layout>
          {routes}      
        </Layout>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));