import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const PitcherNames = (state=[], action) => {
    if (action.type === 'CREATE_PITCHER') {
        const newPitcher = action.payload

        return [...state, newPitcher]
    }
    return state
}

const catcherNames = (state=[], action) => {
    if (action.type === 'CREATE_CATCHER') {
        const newCatcher = action.payload

        return [...state, newCatcher]
    }
    return state
}


const ourReduxStore = createStore(
    combineReducers({
        PitcherNames,
        catcherNames
    })
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ourReduxStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
