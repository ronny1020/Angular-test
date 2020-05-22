import { Component, OnInit, Input } from '@angular/core'
import { Todo } from 'src/app/models/Todo'
import { splitClasses } from '@angular/compiler'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo

  constructor() {}

  ngOnInit(): void {}

  setClasses(): Record<string, unknown> {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }
    return classes
  }
}
