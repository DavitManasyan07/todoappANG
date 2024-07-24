import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import ToDo from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ToDo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getAll()
  }

  onAdd(value: string) {
    if (value) {
      const todo = new ToDo("-1", value, false, false)
      const add = this.todoService.create(todo)
      this.todos.push(add)
    }
  }

  onDelete(id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      const deletedId: string = this.todoService.delete(id)
      if (deletedId) {
        const index = this.todos.findIndex(todo => todo.id === deletedId);
        this.todos.splice(index, 1);
      }
    }
  }

  onEdit(todo: ToDo) {
    if (!todo) {
      return
    }
    todo.isEditing = true;
  }

  private findByID(id: string,): ToDo | undefined {
    return this.todos.find(todo => todo.id === id)
  }

  onSave(todo: ToDo, value: string) {
    todo.title = value;
    todo.isEditing = false;
    const retTodo = this.todoService.update(todo);
    if (retTodo) {
      const index = this.todos.findIndex( (todo)=> todo.id === retTodo.id)
      this.todos[index] = {...retTodo}
    }

  }

  onCancel(retTodo: ToDo) {
    retTodo.isEditing = false;
    const index = this.todos.findIndex( (todo)=> todo.id === retTodo.id)
    this.todos[index] = {...retTodo}
  }
}
