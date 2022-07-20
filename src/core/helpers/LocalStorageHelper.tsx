
/**
 * Get value from localStorage
 * @param {String} key
 * @returns {String}
 */
 export async function localStorageGetItem(key: string) {
    try {
        return localStorage.getItem(key);
    } catch (err) {
        return '';
    }
}

/**
 * Get value from localStorage
 * @param {String} key
 * @param {String} value
 * @returns {String}
 */
export function localStorageSetItem(key: string, value: string) {
    try {
        localStorage.setItem(key, value);
    } catch (err) {}
}