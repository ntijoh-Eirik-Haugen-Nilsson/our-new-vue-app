export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    category: string;
}

export interface Category {
    id: string;
    name: string;
}