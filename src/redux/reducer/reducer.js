const initialState = {
    list: ['task 1', 'task 2', 'task 3']
}


export const listReducer = (state = initialState,action) => {
    switch (action.type){
        case 'ADD_LIST':
            return {
                ...state,
                ...state.list.push(action.payload)
            }
        case 'GET_LIST':
            return {...state};
        default:
            return state;  
    }

}