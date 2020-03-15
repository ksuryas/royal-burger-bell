import React, { Component } from 'react';
import classes from './BurgerBreads.module.css';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

class BurgerBreads extends Component {
    render () {
        let breads = null;
        switch ( this.props.breadType ) {
            case ( 'seeds' ):
                breads = (
                <Aux>
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                    {this.props.msg}
                    <div className={classes.BreadBottom}></div>
                    </Aux>
                );
                break;
            case ( 'plain' ):
                breads = <div className={classes.BreadTop}></div>;
                break;
            case ( 'glutenFree' ):
                breads = (
                <Aux>
                <div className={classes.NoGluten}></div> 
                <div className={classes.NoGlutenBreadBottom}></div>
                </Aux>
                );
                break;
            case ( 'bacon' ):
                breads = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                breads = <div className={classes.Salad}></div>;
                break;
            case ( 'avacados' ): 
            breads = <div className={classes.Avacados}></div>;
            break;
            case ( 'tofu' ): 
            breads = <div className={classes.Tofu}></div>;
            break;
            default:
                breads = null;
        }
        return breads;
    }
};

export default BurgerBreads;