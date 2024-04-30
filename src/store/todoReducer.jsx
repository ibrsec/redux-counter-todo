const initialState = {
    todoList : [{id:1,text:"initial task",completed:false}]
}
const ADD = "ADD";
const DEL = "DEL";
const CLR = "CLR";
const TOGGLE = "TOGGLE";

export const addTodo = (payload) => ({type:ADD,payload})
export const delTodo = (payload) => ({type:DEL,payload})
export const toggleTodo = (payload) => ({type:TOGGLE,payload})
export const clearTodo = () => ({type:CLR})

export const todoReducer = (state=initialState,{type,payload}) => {
    switch(type){
        case ADD:
            return {todoList:[...state.todoList,{id:new Date().getTime(),text:payload,completed:false}]}
        case DEL:
            return { todoList:state.todoList.filter(item => item.id != payload)}
        case CLR:
            return initialState;
        case TOGGLE:
            return {todoList:state.todoList.map(item => item.id == payload ? {...item,completed:!item.completed} : item)}  
        default:
            return state;                              
    }
}