import {APP_UPDATE_VALUE} from '../actions/actionTypes'

const initialState={
    newValue : "Hello WORLD!!"
}

export const updateReducer = (state = initialState, action) => {
    switch (action.type){
        case APP_UPDATE_VALUE:
            return{
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
}