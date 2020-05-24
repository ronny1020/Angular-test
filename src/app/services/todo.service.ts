import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Todo } from '../models/Todo'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
  }
}
