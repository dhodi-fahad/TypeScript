
interface UserData {
    name: string;
    age: number;
    email: string;
}

export const sanitizeInput = (data: any): UserData => {
    let name = "Anonymous";
    let age = 0;
    let email = "unknown@example.com";

    if(typeof data.name === "string" && data.name.trim() !== "") {
        name = data.name;
    }

    if(typeof data.age === "number" && data.age >= 0 && data.age <= 120) {
        age = data.age;
    }

    if( typeof data.email === "string" && validateEmail(data.email)){
        email = data.email;
    }
    return {name, age, email}
}

export function validateEmail (email:string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}