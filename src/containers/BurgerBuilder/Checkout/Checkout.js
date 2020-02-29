import React, { Component } from "react";
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from 'react-redux';

class Checkout extends Component {

    cancelledCheckoutHandler = () => {
        this.props.history.goBack();
    };

    continuedCheckoutHandler = () => {
        this.props.history.replace(this.props.match.url + '/contact-data');
    };

    render() {   
        let summary = <Redirect to='/burger-builder' />;
        if(this.props.ings) {
            let purchasedRedirect = this.props.purchased ? <Redirect to="/thank-you" />: null;
            summary = (
                <div>
                 {purchasedRedirect}
                <CheckoutSummary 
                ingredients={this.props.ings} 
                cancelledCheckout={this.cancelledCheckoutHandler} 
                continuedCheckout={this.continuedCheckoutHandler} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
                </div>                
            );
        }

        return summary;
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);