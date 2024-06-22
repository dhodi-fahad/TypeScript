import { hasPermission, Permission, Role, User } from "../enum.datatype";

describe('Tests ENUM dir',()=>{

    // Test hasPermission function
    test('Should verify if user has permissions', ()=>{
        let guest = new User('Alfred', Role.Guest);
        expect(hasPermission(guest, Permission.Read)).toBe(true);
        expect(hasPermission(guest, Permission.Execute)).toBe(false);
    })
})