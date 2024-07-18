import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HederComponent} from "./components/heder/heder.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HederComponent,TodoListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';

}
