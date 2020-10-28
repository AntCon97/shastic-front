import { combineReducers } from 'redux';

import mainpageReducer from './main/mainpage.reducer';

export default combineReducers({
    mainpage: mainpageReducer
})