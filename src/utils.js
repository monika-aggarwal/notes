const STORE_NAME = 'todo_App'


export const addToStorage = (data = []) => {

    localStorage.setItem(STORE_NAME, JSON.stringify(data))
}

export const deleteFromStorage = () => {

}

export const readStorage = () => {
    return JSON.parse(localStorage.getItem(STORE_NAME)) || {}
}