// Array - ordered * indexed * duplicate values
// aka - List
const arr = ['a', 'b','c']


// size
arr.length // -> 3

// random access
arr[1] // -> 'b'


// iteration
arr.map(item=>item.toUpperCase());
arr.forEach(item => console.log(item));
for(const item of arr) {
    console.log(item)
}

// mutation
arr[2] = 'z'
arr.push('d')
arr.pop()
arr.shift()
arr.unshift('aa')
