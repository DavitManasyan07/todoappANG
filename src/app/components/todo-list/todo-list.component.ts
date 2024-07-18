import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import ToDo from "../../models/todo";

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
todos = [new ToDo("1","go to gym",false),
  new ToDo("1","go to gym",false),
  new ToDo("1","go to gym",false)];
ngOnInit(){
}
}
