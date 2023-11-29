import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const pitcherNames = (state=['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    if (action.type === 'CREATE_PITCHER') {
        const newPitcher = action.payload

        return [...state, newPitcher]
    }
    return state
}

const catcherNames = (state=['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    if (action.type === 'CREATE_CATCHER') {
        const newCatcher = action.payload

        return [...state, newCatcher]
    }
    return state
}


const ourReduxStore = createStore(
    combineReducers({
        pitcherNames,
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
