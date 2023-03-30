import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
// import { legacy_createStore as createStore } from 'redux';
// import { persistStore, persistReducer } from "redux-persist"
// import rootReducer from "./reduceres"
//index laanu rootReducer ullathenkil from il locationil index ennu ezhuthendathilla athu default aai index aanu look cheyyunne
// import storage from 'redux-persist/lib/storage';

// const persistReducer = persistReducer(persistConfig, rootReducer)

// const persistConfig = {
//   key: "persist-key",
//   storage
// }
// const my_store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const my_store = createStore(persistReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const persistor = persistStore(my_store)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
