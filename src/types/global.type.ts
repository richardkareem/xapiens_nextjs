export type AuthForm = {
    email: string;
    password: string
}
export type AuthResponse = {
    id: number;
    token: string
}
export type CreateRequest = {
    name:string;
    job:string;
}
export type CreateResponse = CreateRequest & {
    id: string;
    createdAt: string
    updatedAt?: string | null;
}
