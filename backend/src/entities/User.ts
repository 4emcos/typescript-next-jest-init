class User {
    id?: string;
    username!: string;
    email!: string;
    name!: string;

    private constructor ({name, username, email} : User) {
        return Object.assign(this, {name, username, email})
    }

    static create ({name, username, email} : User) {
        return new User({name, username, email})
    }

}


export {User}