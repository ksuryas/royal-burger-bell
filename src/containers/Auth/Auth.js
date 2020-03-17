import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as actions from '../../store/actions/main';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as utils from '../../shared/utils/allUtils';

class Auth extends Component {
state = {
    controls: {
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail Address'
        }, 
        value: '', 
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false 
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
    }, 
    value: '', 
    validation: {
        required: true,
        maxLength: 6,
        isNumeric: true
    },
    valid: false,
    touched: false 
}
},
inSignupMode: true,
sendgrid: {
    email: {
        recipient: '',
        sender: 'surya.kasibhatla@gmail.com',
        subject: 'Welcome to RBB, new user!',
        text: ''
    }
} 
};

componentDidMount() {
if(!this.props.buildingBurger && this.props.authRedirectPath) {
    this.props.onSetAuthRedirectPath('/burger-builder');
}
};


inputChangedHandler = (event, controlName) => {
    const updatedAuthForm = utils.updateObject(this.state.controls, {
        [controlName]: utils.updateObject(this.state.controls[controlName], {
            value: event.target.value, 
            valid: utils.checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
        })
    }); 
      this.setState({controls: updatedAuthForm}); 
    };
    
    // sendEmail = () => {
    //     let vs = `http://127.0.0.1:4000/send-email?recipient=${this.state.sendgrid.email.recipient}&sender=${this.state.sendgrid.email.sender}&topic=${this.state.sendgrid.email.subject}&message=${this.state.sendgrid.email.text}`;
    //     fetch(vs).catch(error => {
    //         console.log(error);
    //     });
    // };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.inSignupMode);
//        this.sendEmail();
    };

    switchAuthModeHandler = () => {
  this.setState(prevState => {
      return {
          inSignupMode: !prevState.inSignupMode
      };
  }); 
};

render() {
    let formElArray = [];
    for(let key in this.state.controls) {
           formElArray.push({
               id: key, 
               config: this.state.controls[key]
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
        label={formEl.id}
        />
        ));
        
      let form = (
        <form onSubmit={(event) => this.submitHandler(event)}> 
          <h4>If you're a {this.state.inSignupMode ? 'new user, Signup' : 'old user, Sign In'} Here:</h4>
          {inputElBoxes} 
          <Button btnType="Success">{this.state.inSignupMode ? 'Signup' : 'Sign In'}</Button>
        </form>
       );
      
       let errorMsg = null;
       if(this.props.error) {
            errorMsg = <p style={{color: 'red'}}>{this.props.error.message}</p>;
       }

       let authRedirect = null;
       if(this.props.isAuthenticated) {
           authRedirect = <Redirect to={this.props.authRedirectPath} />
           errorMsg = null;
       }

    return (
        <div className={classes.Auth}>
            {authRedirect}
            {errorMsg}
           {form}
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>Switch to {this.state.inSignupMode ? 'Sign In' : 'Signup'}</Button>
        </div>
    );
}
};

const mapStateToProps = state => {
return {
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
};
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, inSignupMode) => dispatch(actions.auth(email, password, inSignupMode)),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);