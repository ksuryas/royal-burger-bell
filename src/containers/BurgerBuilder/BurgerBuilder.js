import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import axios from '../../axios-orders';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/main';
import BreadControls from '../../components/BreadControls/BreadControls';
import Button from '../../components/UI/Button/Button';

class BurgerBuilder extends Component {
    state = { 
        purchaseable: false,
        purchasing: false
}; 

componentDidMount() {
    this.props.onInitBreadTypes();
    this.props.onInitIngredients();
};

purchaseHandler = () => {
  if(this.props.isAuthenticated) {  
  this.setState({purchasing: true});
  } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
  }
};

 purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
};

purchaseCancelHandler = () => {
    this.setState({purchasing: false});
};

updatePurchaseState(ingredients) {
     const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0;
};
  render () {
      const disabledInfo = {
          ...this.props.ings
      };
      
      for(let key in disabledInfo) {
          disabledInfo[key] = disabledInfo[key] <= 0;
      }
       
      let orderSummary = null;
      let tax = 0.08 * this.props.price;  
      let price = this.props.price + tax.toFixed(2);
      let burger = this.props.error && this.props.errorBread ? <p style={{textAlign: 'center', color: 'red'}}>Sorry, either the burger ingredients nor the bread types can't be loaded!</p> : <Spinner />;
      
       if(this.props.ings) {
        burger = (
            <Aux>
            <BreadControls 
                breadPrice={this.props.breadPrice}
                replaceBreadType={() => this.props.onReplaceBreadType(this.props.breadTypes)} 
                hrefHash="burger"
                isAuth={this.props.isAuthenticated} />
                <div id="burger" style={{textAlign: 'right'}}>
                <Burger ingredients={this.props.ings} />
                <Button style={{color: 'black', border: '1px solid black'}} clicked={() => window.scrollTo(0, 0)}>^</Button>                
                <BuildControls 
                 onIngredientAdded={this.props.onIngredientAdded} 
                 onIngredientRemoved={this.props.onIngredientRemoved} 
                 disabled={disabledInfo} 
                 price={this.props.price}
                 resetBurger={this.props.onResetIngs}
                 isAuth={this.props.isAuthenticated}
                 purchaseable={this.updatePurchaseState(this.props.ings)}
                 ordered={this.purchaseHandler} />
                 </div>
          </Aux>
        ); 
           orderSummary = <OrderSummary 
           beforeTax={this.props.price}
           tax={tax.toFixed(2)}
           price={price}
           cancelled={this.purchaseCancelHandler}
           continued={this.purchaseContinueHandler}
           ingredients={this.props.ings} />
       }
       return (
    <Aux>
  <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}> 
    {orderSummary}
    </Modal>  
       {burger}
    </Aux>
 );
    }
}

const mapStateToProps = state => {
return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice.toFixed(2),
   breadTypes: state.burgerBread.breadTypes,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
    errorBread: state.burgerBread.error,
    breadPrice: state.burgerBread.breadPrice.toFixed(2)
};
};

const mapDispatchToProps = dispatch => {
return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onReplaceBreadType: (breadName) => dispatch(actions.replaceBreadType(breadName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onResetIngs: (ingName) => dispatch(actions.resetIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitBreadTypes: () => dispatch(actions.initBreadTypes()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
};
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));