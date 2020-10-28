import { MainpageActionTypes} from './mainpage.types'

const INITIAL_STATE = {
    contacts: [''],
    obj: {}
  
};
  
  const mainpageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MainpageActionTypes.SET_CONTACTS_TO_ARRAY:
        return {
          ...state,
          contacts: action.payload
        };
        case MainpageActionTypes.SET_OBJ_TO_OBJ:
          return{
            ...state,
            obj: action.payload
          }
      default:
        return state;
    }
  };

export default mainpageReducer; 
