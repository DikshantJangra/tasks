import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}?_sort=order`);
  }

  addTodo(title: string, order: number): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, {
      id: crypto.randomUUID(),
      title,
      completed: false,
      order
    });
  }

  updateTodo(id: string, changes: Partial<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/${id}`, changes);
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  reorderTodos(todos: Todo[]): Observable<Todo[]> {
    // In a real API, this would be a bulk update. 
    // For json-server, we might need multiple calls or a custom endpoint.
    // For now, we'll simulate it.
    return this.http.put<Todo[]>(this.apiUrl, todos);
  }
}
