import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;
        switch ( this.props.type ) {
            case ( 'bread-top' ):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
             );
                break;
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'plain' ):
                ingredient = <div className={classes.BreadTop}></div>;
                break;
            case ( 'glutenFree' ):
                ingredient = (
                <Aux>
                <div className={classes.NoGluten}></div>
                <div>{this.props.msg}</div> 
                <div className={classes.NoGlutenBreadBottom}></div>
                </Aux>
                );
                break;
            case ( 'potato' ):
                ingredient = <div className={classes.Potato}></div>;
                break;
            case ( 'sliced' ):
                ingredient = <div className={classes.Sliced}></div>;
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case ( 'avacados' ): 
            ingredient = <div className={classes.Avacados}></div>;
            break;
            case ( 'tofu' ): 
            ingredient = <div className={classes.Tofu}></div>;
            break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

export default BurgerIngredient;