module.exports = function check(str, config) {
    const obj = {};
    let stack = [];
    const openBrackets = [];
    const sameBrackets = [];

    for (let i = 0; i < config.length; i++) {
        obj[config[i][0]] = config[i][1];
        if (config[i][0] === config[i][1]) {
            sameBrackets.push(config[i][0]);
        }
        openBrackets.push(config[i][0]);
    }


    for (let i = 0; i < str.length; i++) {
        const lastBracket = stack[stack.length - 1];
        if (str[i] === lastBracket && sameBrackets.includes(str[i])) {
            stack.pop()
        } else if (openBrackets.includes(str[i])) {
            stack.push(str[i]);
        } else if (obj[lastBracket] !== str[i]) {
            return false;
        } else {
            stack.pop();
        }
    }
    return !stack.length;
}
