import { Component, OnInit } from '@angular/core'
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[]

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .getTodoList()
      .subscribe((todoList) => (this.todoList = todoList))
  }
}
