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

class BurgerBuilder extends Component {
    state = { 
        purchaseable: false,
        purchasing: false
    }; 

componentDidMount() {
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
      let burger = this.props.error ? <p style={{textAlign: 'center', color: 'red'}}>Sorry, the burger ingredients can't be loaded!</p> : <Spinner />;
      
       if(this.props.ings) {
        burger = (
            <Aux>
            <BreadControls 
                purchaseable={this.state.purchaseable} 
                breadPrice='0.00' 
                replaceBreadType={() => console.log('Replaced bread type!')} 
                continued={() => console.warn('Warning: Feature is not implemented yet!')} 
                isAuth={this.props.isAuthenticated} />
                <hr></hr>
                <Burger ingredients={this.props.ings} />                
                <BuildControls 
                 onIngredientAdded={this.props.onIngredientAdded} 
                 onIngredientRemoved={this.props.onIngredientRemoved} 
                 disabled={disabledInfo} 
                 price={this.props.price}
                 resetBurger={this.props.onResetIngs}
                 isAuth={this.props.isAuthenticated}
                 purchaseable={this.updatePurchaseState(this.props.ings)}
                 ordered={this.purchaseHandler} />
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
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
};
};

const mapDispatchToProps = dispatch => {
return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onResetIngs: (ingName) => dispatch(actions.resetIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
};
};
  
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));