interface ValidUser {
    name: string;
    age: number;
    email: string
}

// parseJson: takes in a json string and parses it to json
export const parseJson = (jsonString: string): unknown => {
    try {
        return JSON.parse(jsonString);
    } catch {
        return null;
    }
}

// isValideUser
export const isValideUser = (user: unknown): boolean => {
    if(
        typeof user === 'object' &&
        user !== null &&
        'name' in user &&
        'age' in user &&
        'email' in user
    ) {
        const _user = user as ValidUser;
        return (
            typeof _user.name === 'string' &&
            typeof _user.age === 'number' &&
            typeof _user.email === 'string'
        );
    }
    return false;
}

// processUser
export const processUser = (data: unknown): unknown => {
    if (isValideUser(data)){
        return data
    } else {
        return "Invalid user data"
    }
}
