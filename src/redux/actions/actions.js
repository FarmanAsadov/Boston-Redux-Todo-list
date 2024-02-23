export const addList = (text) => {
    return {
        type: 'ADD_LIST',
        payload: text
    }
}

export const getList = ( ) => {
    return {
        type: 'GET_LIST'
    }
}