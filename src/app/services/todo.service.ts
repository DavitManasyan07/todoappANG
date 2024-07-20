
import { Injectable } from '@angular/core';
import ToDo from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    new ToDo("1","go to gym",false),
    new ToDo("2","go to gym",false),
    new ToDo("3","go to gym",false)
  ];

  getAll(){
    return [...this.todos]
  }
  create(todo: ToDo){
    const id = new Date().getTime().toString();
    const updTodo = {...todo, id: id};
    this.todos.push(updTodo);
    return updTodo;
  }

  remove(){

  }
  dfgdfggdf
}
