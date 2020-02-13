import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/interfaces/task.interface';
import {RodosService} from '../../services/rodos.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

const user = 'Petro';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[];

  constructor(
    private todoService: RodosService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.todoService.tasks$.subscribe(
      (next: Task[]) => {
        this.tasks = next;
      });
  }




ngOnInit() {
  console.log(user);


}

}
