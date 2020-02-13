import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Task} from 'src/app/interfaces/task.interface';
import {RodosService} from '../../services/rodos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  // providers: [],
})
export class TaskItemComponent implements OnInit, OnDestroy {

  @Input()
  public task: Task;

  constructor(
    private totoService: RodosService,
    private router: Router
  ) {
    // console.log('This is Constructor');
  }

  ngOnInit() {
    // console.log('This is ngOnInit');
  }

  ngOnDestroy() {
    // console.log('This is ngOnDestroy');
  }

  public toggleDone() {
    this.totoService.toggleTask(this.task.id);
  }

  public removeTask() {
    this.totoService.removeTask(this.task.id);
  }

  public redirect(): void {
    this.router.navigate(['task', this.task.id])
  }

}
