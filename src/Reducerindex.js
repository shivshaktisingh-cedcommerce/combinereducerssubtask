import { combineReducers } from "redux";
import { reduceraddition } from "./Reduceradd";
import { reducersubtraction } from "./Reducersubtract";
import { reducermultiplication } from "./Reducermultiply";
import { reducerdivision } from "./Reducerdivision";
import { reducerclearfun } from "./Reducerclear";


const rootReducers = combineReducers({
    reduceraddition , reducersubtraction , reducermultiplication , reducerdivision , reducerclearfun
    
})
export default rootReducers