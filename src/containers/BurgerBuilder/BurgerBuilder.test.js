// Example:
// import React from 'react';
// import { BurgerBuilder } from './BurgerBuilder';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Burger from '../../components/Burger/Burger';

// configure({adapter: new Adapter()});

// describe('<BurgerBuilder />', () => {
//     let wrapper;
//     beforeEach(() => {
//         wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
//     });
//     it('should render <Burger /> when receiving ingredients', () => {
//         const ings = {
//             salad: 1,
//             cheese: 1,
//             avacados: 1,
//             tofu: 1,
//             meat: 0,
//             bacon: 0
//         };
//         wrapper.setProps({ings: ings});
//         expect(wrapper.find(Burger)).toHaveLength(1);
//     });
//     });
describe('<BurgerBuilder />', () => {
    it('should run the test', () => {
       console.log('testing...'); 
    });
});