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
