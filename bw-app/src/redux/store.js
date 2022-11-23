// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import educationSaga from "../containers/education/saga";

// const store = createStore(() => {
//     return 100
// });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(educationSaga);

export default store;
