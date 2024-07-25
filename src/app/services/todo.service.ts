import {Injectable} from '@angular/core';
import ToDo from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ToDo[] = [];

  getAll() {
    this.todos = JSON.parse(localStorage.getItem("todoItems") || "[]")
    return [...this.todos]
  }

  create(todo: ToDo) {
    const id = new Date().getTime().toString();
    const updTodo = {...todo, id: id};
    this.todos.unshift(updTodo);
    this.setAll(this.todos)
    return updTodo;
  }

  delete(id: string): string {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    this.setAll(this.todos)
    return id;
  }


  update(listTodo: ToDo): ToDo | undefined {
    const index = this.todos.findIndex(todo => todo.id === listTodo.id);
    this.todos[index] = {...listTodo}
    this.setAll(this.todos)
    return this.todos[index]
  }

  deleteAll(): void {
    this.todos = []
    this.setAll(this.todos)
  }

  private setAll(todos: ToDo[]) {
    localStorage.setItem("todoItems", JSON.stringify(this.todos));
  }
}
