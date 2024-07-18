import { Injectable } from '@angular/core';
import ToDo from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = [
    new ToDo("1","go to gym",false),
    new ToDo("1","go to gym",false),
    new ToDo("1","go to gym",false)
  ];

  getAll(){
    return this.todos
  }
}
