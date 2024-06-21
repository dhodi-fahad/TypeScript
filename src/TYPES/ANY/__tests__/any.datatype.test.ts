import { validateEmail, sanitizeInput } from "../any.datatype";

// Enum for default data values
enum DefaultData {
    NAME = 'Anonymous',
    AGE = 0,
    EMAIL = 'unknown@example.com'
}

describe('Test any.ts file', () => {

    // Test validateEmail function
    test('should validate email', () => { 
        expect(validateEmail('john.doe@email.com')).toBe(true)
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('jhon doe')).toBe(false);
        expect(validateEmail('john@doe')).toBe(false);
     })

     // Test sanitizeInput function
     test('should sanitize input', ()=>{

        let sampleData1 = {
            name: 'john doe',
            age:12,
            email: 'john.doe@email.com'
        }

        expect(sanitizeInput(sampleData1)).toEqual(sampleData1)

        let sampleData2 = {
            name: '',
            age:-1,
            email: ''
        }
        expect(sanitizeInput(sampleData2)).toEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData3  = {
            name: 'john doe',
            age:121,
            email: 'john.doe'
        }
        expect(sanitizeInput(sampleData3)).toEqual({name:sampleData3.name, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData4 = "sampleData4";
        expect(sanitizeInput(sampleData4)).toEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData7 = "";
        expect(sanitizeInput(sampleData7)).toEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData5;
        expect(sanitizeInput(sampleData5)).toEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData6 = null;
        expect(sanitizeInput(sampleData6)).toEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

     })

    })