import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[] = [
    {
      id: 1,
      title: 'Do something',
      isDone: false,
    },
    {
      id: 2,
      title: 'Do nothing',
      isDone: false,
    },
    {
      id: 3,
      title: 'Do something else',
      isDone: false,
    },
    {
      id: 4,
      title: 'Do something 123',
      isDone: false,
    },
    {
      id: 5,
      title: 'Do something qwerty',
      isDone: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public removeTask(id: string | number): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }
  public toggleTask(id: string | number): void {
   const index: number = this.tasks.findIndex(task => task.id === id);

   if (index < 0) {
      return;
   }

   this.tasks[index].isDone = !this.tasks[index].isDone;

  }

}
