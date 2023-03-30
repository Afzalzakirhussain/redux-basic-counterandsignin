// import counterReducer from "./Counter";
// import loggedReducer from "./Islogged";

// import { combineReducers } from "redux";
// // combining all reducers together 'cause we can't seperately add the reducers from seperate folder
// const rootReducer = combineReducers({
//     counter: counterReducer, //counterReduceril ishttamulla reethil peru rename cheyyunnu to short
//     //if we add only counterReducer then it realise as counterReducer:counterReducer (ES6)
//     isLogged: loggedReducer
// })

// export default rootReducer
import counterReducer from "./Counter";
import loggedReducer from "./Islogged";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer,
    loggedReducer
})


export default rootReducer