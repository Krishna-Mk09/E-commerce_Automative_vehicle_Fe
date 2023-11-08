 export class User{
    userId?:number
    firstName?:string
    lastName?:string
    username?:string
    password?:string
    role?:string
    address?:string

    constructor(){
        this.userId = 0;
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.password = "";
        this.role = "";
        this.address = "";
    }
}