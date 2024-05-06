
function scramble(str, arr) {
    const rearranged = [];

    for (let i = 0; i < arr.length; i++) {
        rearranged[arr[i]] = str[i];
    }

    return rearranged.join('');
}

console.log(scramble('abcd', [0, 3, 1, 2])); 