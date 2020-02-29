import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/main";

class Orders extends Component {    
    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    };

    render() {
        let orders = null;
        if(this.props.orders !== orders) {
            orders = this.props.orders.map(order => (
                <Order 
                key={order.id} 
                ingredients={order.ingredients}
                price={order.price}
                />
            ));
        }
        return orders;
    }
};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));