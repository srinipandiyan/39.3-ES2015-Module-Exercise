/** exports two helper functions
 * choice(items) => returns a randomly selected item from array of items
 * remove(items, item) => removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 */

/** Returns a random item from items array */
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
};
  
/** Removes item from items array */
function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
};


export { choice, remove };