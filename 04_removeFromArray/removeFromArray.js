const removeFromArray = function(items) {
    let index = 0
    for (let i = 1; i < arguments.length; i++) {

        while (items.includes(arguments[i])) {

            index = items.indexOf(arguments[i]);
            items.splice(index, 1);
        }
    }
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
