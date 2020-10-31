import { MainpageActionTypes} from './mainpage.types'

const INITIAL_STATE = {
    contacts: [''],
    obj: {},
    searchField: '',
    pages: 1,
    display1: [''],
    display2: [''],
    display3: [''],
    count: 0,
  
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
          };
          case MainpageActionTypes.SET_PAGE_TO_PAGE:
          return{
            ...state,
            pages: action.payload
          };
          case MainpageActionTypes.SET_SEARCHFIELD_TO_SEARCHFIELD:
          return{
            ...state,
            searchField: action.payload
          };
          case MainpageActionTypes.SET_COUNT_TO_COUNT:
          return{
            ...state,
            count: action.payload
          };
          case MainpageActionTypes.SET_DIS1_TO_DIS1:
          return{
            ...state,
            display1: action.payload
          };
          case MainpageActionTypes.SET_DIS2_TO_DIS2:
          return{
            ...state,
            display2: action.payload
          };
          case MainpageActionTypes.SET_DIS3_TO_DIS3:
          return{
            ...state,
            display3: action.payload
          };
      default:
        return state;
    }
  };

export default mainpageReducer; 
