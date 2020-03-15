import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerBreads from './BurgerBreads/BurgerBreads';

const burger = ( props ) => {

    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        });

    return (
        <div className={classes.Burger}>
            <BurgerBreads breadType={props.breads} />
            {transformedIngredients}
        </div>
    );
};

export default burger;