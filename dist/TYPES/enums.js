"use strict";
// Enums Definition
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
var Permission;
(function (Permission) {
    Permission["Read"] = "Read";
    Permission["Write"] = "Write";
    Permission["Execute"] = "Execute";
})(Permission || (Permission = {}));
// Role - Permission Mapping
const rolePermissions = {
    [Role.Admin]: [Permission.Read, Permission.Write, Permission.Execute],
    [Role.User]: [Permission.Read, Permission.Write],
    [Role.Guest]: [Permission.Read]
};
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
function hasPermission(user, permission) {
    return rolePermissions[user.role].includes(permission);
}
const admin = new User('John', Role.Admin);
const guest = new User('Chris', Role.Guest);
console.log(hasPermission(admin, Permission.Execute));
console.log(hasPermission(guest, Permission.Write));
