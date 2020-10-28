import React from 'react';
import ReactDom from 'react-dom'
import MainPage from './../../page/mainpage/mainpage'
import Provider from 'react-redux'
import {createStore} from 'redux'
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect'

afterEach(cleanup);

const startingState = {
    contacts: [''],
    obj: {}
}
function reducer(state = startingState, action){
    switch(action.type){
        case 'SET_CONTACTS_TO_ARRAY': 
        return{...state, contacts: action.payload 
        };
        case 'SET_OBJ_TO_OBJ': 
        return{...state, obj: action.payload 
        };
        default:
        return state;
    }
}

function renderWithRedux(component, 
    { initialState, store = createStore(reducer, initialState)} = {}
    ){return {
        ...render(<Provider store={store}>{component}</Provider>)
    }}

if('renders with redux', () => {
    const {getByTestId, getByText} = renderWithRedux(<MainPage />)
});