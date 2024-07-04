// Set - Ordered, Uniques values
// a.k.a list

const set = new Set(['a', 'b', 'c']);

// size
set.size // -> 3

// access
set.has('a')

// iteration
set.forEach(x=>{})
for(const x of set){
    x
}

// mutation
set.add('d') // adds 'd'
set.delete('d') // deletes 'd'


// isSuperSet(setA, setB)
// union(setA, setB)
// intersection(setA, setB)
// difference(setA, setB)

export type TSet = Set<number>

export function isSuperSet(set: TSet, subset: TSet): boolean{
    for(const elem of subset) if (!set.has(elem)) return false;
    return true
}

export function union(setA: TSet, setB: TSet): TSet{
    const union = setA;
    for(const elem of setB) union.add(elem);
    return union
}

export function intersection(setA: TSet,  setB: TSet ): TSet {
    const inter: TSet  = new Set()
    for(const elem of setA) if(setB.has(elem)) inter.add(elem)
    return inter;
}

export function difference(setA: TSet, setB: TSet): TSet{
    let diff: TSet = new Set(setA)
    for(const elem of setB) diff.delete(elem)
    return diff
}