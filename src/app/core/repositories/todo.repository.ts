import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Todo } from '../models/todo.model';

const SEED: Todo[] = [
  { id: '1', title: 'Design System UI', completed: true, order: 0 },
  { id: '2', title: 'Implement Signal Store', completed: false, order: 1 },
  { id: '3', title: 'Setup Dockerization', completed: false, order: 2 },
];

@Injectable({ providedIn: 'root' })
export class TodoRepository {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private get isLocal(): boolean {
    return isPlatformBrowser(this.platformId) && window.location.hostname === 'localhost';
  }

  private readonly apiUrl = 'http://localhost:3000/todos';

  // In-memory store for production (no backend available)
  private mem: Todo[] = SEED.map(t => ({ ...t }));

  getTodos(): Observable<Todo[]> {
    if (!this.isLocal) return of([...this.mem]);
    return this.http.get<Todo[]>(`${this.apiUrl}?_sort=order`).pipe(catchError(() => of([...this.mem])));
  }

  addTodo(title: string, order: number): Observable<Todo> {
    const todo: Todo = { id: crypto.randomUUID(), title, completed: false, order };
    if (!this.isLocal) { this.mem.push(todo); return of(todo); }
    return this.http.post<Todo>(this.apiUrl, todo).pipe(catchError(() => { this.mem.push(todo); return of(todo); }));
  }

  updateTodo(id: string, changes: Partial<Todo>): Observable<Todo> {
    const idx = this.mem.findIndex(t => t.id === id);
    if (idx > -1) this.mem[idx] = { ...this.mem[idx], ...changes };
    if (!this.isLocal) return of(this.mem[idx]);
    return this.http.patch<Todo>(`${this.apiUrl}/${id}`, changes).pipe(catchError(() => of(this.mem[idx])));
  }

  deleteTodo(id: string): Observable<void> {
    this.mem = this.mem.filter(t => t.id !== id);
    if (!this.isLocal) return of(void 0);
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(() => of(void 0)));
  }
}
