import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import ToDo from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ToDo[] = [];

constructor(private todoService: TodoService){
}
ngOnInit(){
    this.todos = this.todoService.getAll()
}

  onAdd(value: string) {
    const todo = new ToDo("-1", value,false)
    const add = this.todoService.create(todo)
    this.todos.push(add)
  }
}
