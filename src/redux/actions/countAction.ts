export const addCount = count => {
    return {
      type: 'ADD_COUNT',
      payload: count
    }
}

export const removeCount = count => {
    return {
      type: 'REMOVE_COUNT',
      payload: count
    }
}