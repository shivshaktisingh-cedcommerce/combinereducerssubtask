import { combineReducers } from "redux";
import { reduceraddition } from "./Reduceradd";
import { reducersubtraction } from "./Reducersubtract";
import { reducermultiplication } from "./Reducermultiply";
import { reducerdivision } from "./Reducerdivision";


const rootReducers = combineReducers({
    reduceraddition , reducersubtraction , reducermultiplication , reducerdivision
    
})
export default rootReducers