function leftpad(string, amount, char) {
    let pad = '';
    for(let i = 1; i <= amount; i++) {
        pad += char;
    }
    return `${pad}${string}`;
}

console.log(leftpad('1234', 5, ' '));
