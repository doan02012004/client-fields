import { LoginPayload, UserType } from "../../types/auth";
import { config } from "../config";
import instanceAxios from "../instance";
import { TypeRegisterSchema } from "../schemas/auth";


export const LoginFn = async (data:LoginPayload ) => {
    const res = await fetch(`${config.DOMAIN_SERVER}/auth/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    const result = await res.json();
    return result;
}

export const RegisterFn = async(data:TypeRegisterSchema):Promise<{success:boolean,data:UserType}> => {
    const res = await instanceAxios.post('/auth/register',data)
    return res.data
}

export const getNewAccessToken = async () => {
    const res = await fetch(`${config.DOMAIN_SERVER}/auth/refresh-tokens`, {
        method: "POST",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Failed to refresh token");
    }

    const result = await res.json();
    return result;
}

export const getMeQueryFn = async() => {
    const res = await instanceAxios.get('/users/me')
    return res.data
}