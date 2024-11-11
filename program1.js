var isValid = function(s) {
    const bracketStack = [];
    const closeToOpen = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let bracket of s) {
        if (closeToOpen[bracket]) {
            const topBracket = bracketStack.length === 0 ? '#' : bracketStack.pop();
            if (topBracket !== closeToOpen[bracket]) {
                return false;
            }
        } else {
            bracketStack.push(bracket);
        }
    }

    return bracketStack.length === 0;
};

module.exports = { isValid };
