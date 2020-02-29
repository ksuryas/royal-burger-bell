import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../../components/UI/Button/Button';
import axios from '../../../../axios-orders';
import Input from '../../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../../store/actions/main';
import * as utils from '../../../../shared/utils/allUtils';

class ContactData extends Component {
    state = {
        isValidForm: false,
        orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            }, 
            value: '', 
            validation: {
                required: true
            },
            valid: false,
            touched: false 
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            }, 
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            }, 
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        city: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'City'
            }, 
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        state: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'State'
            }, 
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            }, 
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'ZIP/Postal CODE'
            }, 
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 6,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        comments: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Any Comments or Health Restrictions'
            }, 
            value: '',
            validation: {
                required: false
            }
        }, 
        deliveryMode: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'pickup', displayValue: 'Pickup at Store'},
                    {value: 'homeDelivery', displayValue: 'Home Delivery'}
                ]
            }, 
            validation: {
                required: true
            },
            valid: true,
            touched: false,
            value: 'Pickup at Store'
    } 
  }
};

orderHandler = (event) => {
event.preventDefault();
let formData = {};
for(let formElId in this.state.orderForm) {
    formData[formElId] = this.state.orderForm[formElId].value;
};
const orderInfo = {
ingredients: this.props.ings,
price: this.props.price,
orderData: formData,
userId: this.props.userId
};

this.props.onOrderBurger(orderInfo, this.props.token);

};

inputChangedHandler = (event, inputId) => {
  const updatedFormEl = utils.updateObject(this.state.orderForm[inputId], {
    value: event.target.value,
    valid: utils.checkValidity(event.target.value, this.state.orderForm[inputId].validation),
    touched: true
  }); 
  
  const updatedOrderForm = utils.updateObject(this.state.orderForm, {
    [inputId]: updatedFormEl
  }); 

   let formIsValid = true;
   for(let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid;
   }
  this.setState({orderForm: updatedOrderForm, isValidForm: formIsValid}); 
};

render() {
    let formElArray = [];
    for(let key in this.state.orderForm) {
           formElArray.push({
               id: key, 
               config: this.state.orderForm[key]
      }); 
    };
    const inputElBoxes = formElArray.map(formEl => (
<Input
key={formEl.id} 
elementType={formEl.config.elementType} 
elementConfig={formEl.config.elementConfig} 
value={formEl.config.value} 
changed={(event) => this.inputChangedHandler(event, formEl.id)} 
invalid={!formEl.config.valid}
shouldValidate={formEl.config.validation}
touched={formEl.config.touched} 
/>
));
      let form = (
        <form onSubmit={(event) => this.orderHandler(event)}>
          {inputElBoxes}
          <Button btnType="Success" disabled={!this.state.isValidForm}>ORDER MY BURGER!</Button>
        </form>
       );
      return (
        <div className={classes.ContactData}>
        <h4>Enter your Contact Data:</h4>
        {form}
        </div>
    ); 
  };
 };

 
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId 
    };
};

const mapDispatchToProps = dispatch => {
    return {
    onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));