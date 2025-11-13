// Auto-generated TypeScript types from api-server.go
// DO NOT EDIT MANUALLY
// Generated: 2025-11-07 09:56:31

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ErrorResponse {
  error: string;
}

export type TodosResponse = Todo[];
