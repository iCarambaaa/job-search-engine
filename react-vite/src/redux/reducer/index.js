import { initialState } from '../store'
import {SAVE_TO_JOBLIST} from "../actions"



const mainReducer = (state = initialState, action) => {
    // const {type, payload} = action ??
    switch (action.type) {
        // case "SET_COLOR":
        //     return {...state, background: payload}
        // case "SET_DEFAULT_COLOR":
        //     return {...state, background: payload}
            case SAVE_TO_JOBLIST:
                return {...state,
                    jobList: action.payload}
            default: 
                return state
    }
}

export default mainReducer