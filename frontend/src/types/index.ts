export interface Post {
    text: string; 
    createdAt?: string;
    updatedAt?: string;
    id?:string;
}

export interface User {
    name: string; 
    email: string;
    createdAt?: string;
}