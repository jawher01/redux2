import {DECREMENT, INCREMENT} from "../Constant/ActionTypes"

const InitialState={
    count :0
}
export const count =(state =InitialState,action)=>{
switch (action.type) {
    case INCREMENT:
        
        return {...state,count:state.count+1}
        case DECREMENT:
        
            return {...state,count:state.count-1}

    default:
        return state
}
}