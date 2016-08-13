export class User {

    private email: number;
    private name: string;
    private password: string;
    private role: string;

    constructor(email: number, name: string, password: string, role: string) {

        this.email = email;
        this.name = name;
        this.password = password;
        this.role = role;
    }
}
