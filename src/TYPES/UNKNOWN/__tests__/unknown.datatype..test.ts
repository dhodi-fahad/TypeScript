import { isValideUser, parseJson, processUser } from "../unknown.datatype"
describe('Test the UNKNOWN dir', ()=>{
    const jsonString1 = '{"name": "John", "age": 30, "email": "john@email.com"}';
    const jsonString2 = '{"name": "Doe", "age": "unknown", "email": "doe@email.com"}';
    const jsonString3 = '{"username": "johndoe", "age": 30, "email": "john.doe@example.com"}';
    const jsonString4 = 'invalid json string';

    // Test the parseJson function
    test('parseJson - should parse json strings to json',()=>{
        expect(parseJson(jsonString1)).toEqual({"name": "John", "age": 30, "email": "john@email.com"});
        expect(parseJson(jsonString4)).toEqual(null);
    })

    // Test the isValidUser function 
    test('isValidUser - should verify if user data is valid or not', ()=>{
        expect(isValideUser({"name": "John", "age": 30, "email": "john@email.com"})).toBe(true);
        expect(isValideUser({"name": "Doe", "age": "unknown", "email": "doe@email.com"})).toBe(false)
        expect(isValideUser({"username": "Doe", "age": 2, "email": "doe@email.com"})).toBe(false)
    })

    // Test the processData function
    test('processData - should process user data', ()=>{
        expect(processUser({"name": "John", "age": 30, "email": "john@email.com"})).toEqual({"name": "John", "age": 30, "email": "john@email.com"})
        expect(processUser({"username": "John", "age": 30, "email": "john@email.com"})).toEqual("Invalid user data")
        expect(processUser(jsonString4)).toEqual("Invalid user data")
    })
})