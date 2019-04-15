import { Component } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';
import { Plugins } from 'protractor/built/plugins';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To Do List';
  totalTasks: any = [];
  newTask = true;
  date = new Date(Date.now());
  constIndex: any;
  deleteEnable = false;
  taskName: any;
  pageStatus: boolean = true;
  droppedData: string;
  addclick: boolean = false;
  plus:boolean = true;
  // this function is for updating the stored records
  onSelect(list, i) {
    this.newTask = false;
    this.constIndex = i;
    this.taskName = list;
    this.pageStatus = !this.pageStatus;
  }
  // closing the task popup
  onClose() {
    this.pageStatus = true;
    this.plus = !this.plus;
    return this.plus 
  }
  // Rediction of add for add button.
  gopage() {
    this.addclick = !this.addclick;
    this.pageStatus = !this.pageStatus;
    this.taskName = '';
  }
  // Adding the new task and updating the task
  add_task(taskName) {
    if ((this.constIndex || this.constIndex === 0) && !this.newTask) {
      this.totalTasks[this.constIndex] = taskName;
      this.newTask = true;
    } else if (this.newTask) {
      this.totalTasks.push(taskName);
    }
    this.pageStatus = true;
  }
  // After leaves the drag.
  dragEnd(event, index) {
    this.deleteEnable = false;
  }
  // Enable the delete button after drag
  dragStart() {
    this.deleteEnable = true;
    
  }
  // Deleting the element from array after drop.
  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
    this.totalTasks.splice(dropData, 1);
    setTimeout(() => {
      this.droppedData = '';
    }, 2000);
  }
}