export interface LoginPayload {
    email: string,
    password: string
}

export interface UserType {
    _id:string,
    name:string,
    email:string,
    phoneNumber:string,
    gender:"male" | "female",
    dateOfBirth:string,
    role:"user"|"admin",
    deletedAt:string|null
}