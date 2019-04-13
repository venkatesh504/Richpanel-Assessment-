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
  task_name:any ;
  update_check: boolean;
  page_status:boolean = true;
  update_taskName:any;
  add_taskname:any;
  due_tasks:any = 0;

  jsonlist:any;
  onSelect(list , i){
    var list_1 :any;
    this.page_status =!true;
    this.update_taskName = list;
    this.task_name = this.update_taskName;
    for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
       list_1 = _i;      
      
    }
    if(i === list_1){
      this.update_check= false;
      console.log("updated");
       }
    else{
     
      console.log("new");
      
    }
  }
  onClose(){
    this.page_status = true ;
  }
  gopage(){
    this.page_status = !true;
    this.task_name ="";
  }
  add_task(){
    this.page_status = true;
    if(this.update_check === true){
      console.log("check fail update fail");
      
    }
    else{
      console.log("check success updar");
      this.update_check = true 
    }
   this.taskList.push(this.task_name);
   this.due_tasks = this.taskList.length;
  }
}