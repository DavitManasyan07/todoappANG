import {Injectable} from '@angular/core';
import ToDo from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    new ToDo("1", "go to gym", false, false),
    new ToDo("2", "go to gym", false, false),
    new ToDo("3", "go to gym", false, false)
  ];

  getAll() {
    return [...this.todos]
  }

  create(todo: ToDo) {
    const id = new Date().getTime().toString();
    const updTodo = {...todo, id: id};
    this.todos.push(updTodo);
    return updTodo;
  }

  delete(id: string): string {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos.splice(index, 1);
    return id;
  }


  update(listTodo: ToDo): ToDo | undefined {
    const index = this.todos.findIndex(todo => todo.id === listTodo.id);
    this.todos[index] = {...listTodo}
    return this.todos[index]
  }
}
