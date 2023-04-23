export interface ILogin {
    email: string;
    password: string;
    author: string;

    code?: number;
    message?: string;
}

export interface ILoginError {
    code?: number;
    message?: string;
}