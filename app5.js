function randomInteger(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + a;
}
const x = randomInteger(4, 16);
if (x < 4) {
    console.log(`Failed: ${x} the number is smaller than 4`);
} else if (x > 16) {
    console.log(`Failed: ${x} the number is bigger than 16`);
} else {
    console.log(`${x} Passed, bravo`);
}