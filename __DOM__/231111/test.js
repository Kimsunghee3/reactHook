const original = ["a", 2, true, 4, "hi"]
const copy = original.slice()

console.log(JSON.stringify(original) === JSON.stringify(copy)) // true
copy.push(10)


console.log(JSON.stringify(original) === JSON.stringify(copy)) // false

console.log(original) // ['a', 2, true, 4, 'hi']
console.log(copy) // ['a', 2, true, 4, 'hi', 10]
