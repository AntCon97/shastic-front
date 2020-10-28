import { MainpageActionTypes } from './mainpage.types';

export const setContactsArr = arr => ({
  type: MainpageActionTypes.SET_CONTACTS_TO_ARRAY,
  payload: arr
});
export const setOBJ = obj => ({
  type: MainpageActionTypes.SET_OBJ_TO_OBJ,
  payload: obj
});



