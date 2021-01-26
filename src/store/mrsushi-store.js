import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddeware from 'redux-promise'
import reducersIndex from '../store/reducers/reducersIndex'

const MrsushiStore = () => {
    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducersIndex,
        composeEnhances(applyMiddleware(promiseMiddeware))
    )

    return store;
}

export default MrsushiStore;