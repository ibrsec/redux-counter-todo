
const intialState = {
    count: 5
}
const increase = "INCREASE";
const decrease = "DECREASE";
const reset = "RESET";

export const incCounter = () => ({type:increase}) 
export const decCounter = () => ({type:decrease}) 
export const resetCounter = () => ({type:reset}) 

export const counterReducer = (state = intialState,{type,payload}) => {
    switch(type){
        case increase :
            return {count : state.count + 1}
        case decrease :
            return state.count > 1 ? {count : state.count - 1} : state;
        case reset :
            return intialState
        default:
            return state
    }

}