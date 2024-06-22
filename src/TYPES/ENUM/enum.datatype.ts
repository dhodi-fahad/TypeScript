// Enums Definition
export enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

export enum Permission {
    Read = "Read",
    Write = "Write",
    Execute = "Execute"
}

// Role - Permission Mapping

const rolePermissions: {[key in Role]: Permission[]} = {
    [Role.Admin]: [Permission.Read, Permission.Write, Permission.Execute],
    [Role.User]: [Permission.Read, Permission.Write],
    [Role.Guest]: [Permission.Read]
}


export class User {
    name: string;
    role: Role;

    constructor (name: string, role: Role){
        this.name = name;
        this.role = role;
    }
}

export function hasPermission(user:User, permission: Permission): boolean {
    return rolePermissions[user.role].includes(permission);
}

const admin = new User('John', Role.Admin)
const guest = new User('Chris', Role.Guest)

console.log(hasPermission(admin, Permission.Execute))
console.log(hasPermission(guest, Permission.Write))


