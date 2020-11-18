import { createStore } from "redux"
import { routeReducer } from "../Reducer/Index"
export const store = createStore(routeReducer, reducer, /* preloadedState, */
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
