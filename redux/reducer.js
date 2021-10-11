import { TAMBAH, KURANG } from './tipe'
 
const initData = {
    counter:1,
    text:"test"
} 

export const reducerCounter = (state = initData, action) => {
    switch(action.type){
        case TAMBAH:
            return {...state,counter:action.data + 1}
        case KURANG:
            return {...state, counter:action.data - 1}
        default:return state;
    }
}