import { SET_CITY } from "./../actions";
const reducer = (state = {}, action) => {
    switch(action.type){
        case SET_CITY:
            return { ...state, city: action.payload }
        default:
            return state;
    }
};

export default reducer;