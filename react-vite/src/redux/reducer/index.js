import { initialState } from '../store'



const mainReducer = (state = initialState, action) => {
    // const {type, payload} = action ??
    switch (action.type) {
        // case "SET_COLOR":
        //     return {...state, background: payload}
        // case "SET_DEFAULT_COLOR":
        //     return {...state, background: payload}
            default: 
                return state
    }
}

export default mainReducer