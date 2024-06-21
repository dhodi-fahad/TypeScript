import { validateEmail, sanitizeInput } from "../any";

describe('Test any.ts file', () => {
    test('should validate email', () => { 
        expect(validateEmail('john.doe@email.com')).toBe(true)
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('jhon doe')).toBeFalsy()
        expect(validateEmail('john@doe')).toBe(false);
     })

     test('should sanitize input', ()=>{
        enum DefaultData {
            NAME = 'Anonymous',
            AGE = 0,
            EMAIL = 'unknown@example.com'
        }

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
        expect(sanitizeInput(sampleData2)).toStrictEqual({name:DefaultData.NAME, age: DefaultData.AGE, email: DefaultData.EMAIL})

        let sampleData3  = {
            name: 'john doe',
            age:121,
            email: 'john.doe'
        }
        expect(sanitizeInput(sampleData3)).toStrictEqual({name:sampleData3.name, age: DefaultData.AGE, email: DefaultData.EMAIL})

     })

    })