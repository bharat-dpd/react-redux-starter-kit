import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'product/:product_id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProductDetails = require('./containers/ProductDetailsContainer').default
      const reducer = require('./modules/productDetails').default

      /*  Add the reducer to the store on key 'products'  */
      injectReducer(store, { key: 'productDetails', reducer })

      /*  Return getComponent   */
      cb(null, ProductDetails)

    /* Webpack named bundle   */
    }, 'productDetails')
  }
})
