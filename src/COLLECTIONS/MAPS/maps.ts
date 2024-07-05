// Map - ordered * key - value pairs

const map = new Map([
    ['username', 'Fahad'],
    ['email', 'fahad@email.com']
])


// size
map.size

// access
map.has('username') // -> true
map.get('email') // -> fahad@email.com

// iteration
map.keys() // ['username', 'email']
map.values() // ['fahad', 'fahad@email.com']
map.entries() // [['username', 'fahad'], ['email', 'fahad@email.com']]
map.forEach(([k,v])=>{})
for(const [k,v] of map){}

// mutation
map.set('age', '34')
map.delete('age')
map.clear()

// Word Frequency Counter
function wordFrequencyCounter(input: string) {
    const words:string[] = input.replace(/[.,!?;:]/g, '').toLowerCase().split(/\s+/);
    let freqMap = new Map()
    const countedWords:string[] = []
    for(const word of words){
        let counter = 0;
        if(countedWords.find(elem => elem === word) === undefined){
            for(const elem of words){
                if (elem === word){
                    counter++
                }
            }
            freqMap.set(word, counter);
            countedWords.push(word)
        }
        
    }

    return freqMap
}

let text = "Hello world! Hello everyone. This is a test. Hello world.";
let result = wordFrequencyCounter(text);
console.log(result)
