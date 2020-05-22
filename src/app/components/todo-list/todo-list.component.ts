import { Component, OnInit } from '@angular/core'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[]

  constructor() {}

  ngOnInit(): void {
    this.todoList = [
      { id: 1, title: 'Todo One', completed: true },
      { id: 2, title: 'Todo Two', completed: false },
      { id: 3, title: 'Todo Three', completed: false },
    ]
  }
}
