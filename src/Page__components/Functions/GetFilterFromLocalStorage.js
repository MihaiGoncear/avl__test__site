export function GetItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem('filter'))
}