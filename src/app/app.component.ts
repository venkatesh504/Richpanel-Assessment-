import { Component } from '@angular/core';
import {list}  from './../assets/json/list.json';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webapp';
  taskList : any = list;
  task_name:any;
  due_indexs : any;
  // constructor() {}

  d: Date = new Date();  
  // console.log(taskList);
  add_task(){
    console.log( this.task_name);
   this.taskList.push(this.task_name);
  
  }
}
// @Component({
//   selector: 'bottom-sheet-overview-example-sheet',
//   templateUrl: 'bottom-sheet-overview-example-sheet.html',
// })
// export class BottomSheetOverviewExampleSheet {
//   constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

//   openLink(event: MouseEvent): void {
//     this.bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }