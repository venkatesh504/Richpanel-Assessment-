import { Component } from '@angular/core';
import {list}  from './../assets/json/list.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webapp';
  taskList : any = list;
  task_name:any;
  page_status:boolean = true;
  update_taskName:any;
  add_taskname:any;
  onUpdate(list){
    
    this.page_status =!true;
    this.update_taskName = list;
    this.task_name = this.update_taskName;
    
  }
  onClose(){
    this.page_status = true ;
  }
  gopage(){
    this.page_status = !true;
  }
  add_task( ){
  
   this.taskList.push(this.task_name);
   console.log(this.add_task);
   
   this.page_status = true;
   
  
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