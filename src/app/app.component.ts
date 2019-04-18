import { Component } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To Do List';
  totalTasks: any = [];
  inLineEdit: any;
  newTask = true;
  date = new Date(Date.now());
  constIndex: any;
  deleteEnable = false;
  taskName: any;
  pageStatus: boolean = true;
  droppedData: string;
  addclick: boolean = false;
  plus: any ;
  pluserotate: boolean = false;
  circle_status: any = "none";
  index_value: any;
  delete_class:any;
  // this function is for updating the stored records
  onSelect(list, i) {
    // event.stopPropagation();
    console.log('Clicked!')
    this.inLineEdit = list
    this.newTask = false;
    this.constIndex = i;
    this.taskName = list;
    this.pageStatus = !this.pageStatus;
  }

  // closing the task popup
  onClose() {
    this.pageStatus = true;
  
    this.circle_status = "close";
    console.log("in close",this.circle_status);
    
    console.log("close status",this.circle_status);
    
  }

  // Rediction of add for add button.
  gopage() {
    this.addclick = !this.addclick;
    this.pageStatus = !this.pageStatus;
    this.circle_status = "open";
    console.log("in go page open",this.circle_status);
    this.taskName = '';
  }
  // Adding the new task and updating the task
  add_task(taskName) {
    if ((this.constIndex || this.constIndex === 0) && !this.newTask) 
    {
      this.totalTasks[this.constIndex] = taskName;
      this.newTask = true;
    } 
    else if (this.newTask) 
    {
      this.totalTasks.push(taskName);
    }
    this.pageStatus = true;
    this.circle_status = "close";
  }
  // After leaves the drag.
  dragEnd(event, index) {
    this.deleteEnable = false;
    this.index_value = index;
    console.log("end working");
    return this.index_value;
  }
  // Enable the delete button after drag
  dragStart() {
    this.deleteEnable = true;
  }
  // Deleting the element from array after drop.
  onDrop({ dropData }: DropEvent<string>): void {
    this.droppedData = dropData;
    this.totalTasks.splice(this.index_value, 1);
    setTimeout(() => {
      this.droppedData = '';

    }, 2000);
    this.plus = 'rotate';
  }

}