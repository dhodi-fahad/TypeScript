import { difference, intersection, isSuperSet, TSet, union } from "../sets"

describe('Test SETS Dir', () => {
    const setA: TSet = new Set([1, 2, 3, 4]);
    const setB: TSet = new Set([2, 3]);

    test('should check is set is super set', () => {
        expect(isSuperSet(setA, setB)).toEqual(true);
    })

    test('should return union of 2 sets', () => {
        expect(union(setA, setB)).toEqual(setA)
    })

    test('should return intersection of 2 sets', ()=>{
        expect(intersection(setA, setB)).toEqual(setB)
    })

    test('should return difference', () => {
        expect(difference(setA, setB)).toEqual(new Set([1,4]))
    })
})