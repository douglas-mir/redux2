import {APP_UPDATE_VALUE} from "./actionTypes";

//Action Creator
//--------------
export const UpdateAction = value => ({
   type: APP_UPDATE_VALUE,
   newValue: value
});