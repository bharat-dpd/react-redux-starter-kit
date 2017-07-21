import {combineReducers} from 'redux';
import ProductsReducer from './products';
console.log('---------',ProductsReducer);
const rootReducer = combineReducers({
    products: ProductsReducer
});
export default rootReducer;