export interface ILogin {
    email: string;
    password: string;
    author: string;
}

export interface ILoginError {
    code: number;
    message: string;
}