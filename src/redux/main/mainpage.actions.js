import { MainpageActionTypes } from './mainpage.types';

export const setContactsArr = arr => ({
  type: MainpageActionTypes.SET_CONTACTS_TO_ARRAY,
  payload: arr
});
export const setOBJ = obj => ({
  type: MainpageActionTypes.SET_OBJ_TO_OBJ,
  payload: obj
});

export const setPage = page => ({
  type: MainpageActionTypes.SET_PAGE_TO_PAGE,
  payload: page
})

export const setSearch = search => ({
  type: MainpageActionTypes.SET_SEARCHFIELD_TO_SEARCHFIELD,
  payload: search
})

export const setCount = count => ({
  type: MainpageActionTypes.SET_COUNT_TO_COUNT,
  payload: count
})

export const setDis1 = dis1 => ({
  type: MainpageActionTypes.SET_DIS1_TO_DIS1,
  payload: dis1
})



export const setDis3 = dis3 => ({
  type: MainpageActionTypes.SET_DIS3_TO_DIS3,
  payload: dis3
})

export const setSel = sel => ({
  type: MainpageActionTypes.SET_SEL_TO_ID,
  payload: sel
})
export const setMaxPage = arr => ({
  type: MainpageActionTypes.SET_MAXPAGE_TO_ARR,
  payload: arr
})

export const setId = num => ({
  type: MainpageActionTypes.SET_ID_TO_NUM,
  payload: num
})