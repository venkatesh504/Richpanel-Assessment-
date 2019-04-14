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
  index_value: any;
  dragStatus:boolean = true;
addclick:boolean=false;
  constructor(){
    this.due_tasks = this.taskList.length;
    console.log("function comming");
    
  }
  onSelect(list , i){
    var list_1 :any;
    console.log(this.index_value);
    
    this.page_status =!true;
    this.update_taskName = list;
    this.task_name = this.update_taskName;
    for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
       list_1 = _i;      
      
    }

  }

  onClose(){
    this.page_status = true ;
  }
  gopage(){
    this.addclick = !this.addclick; 
    this.page_status = !true;
    this.task_name ="";
    
  }
  
  add_task( list){
  
    var list_1 :any;
    for (var _i = 0, _a = this.taskList; _i < _a.length; _i++) {
      list_1 = _i;      
     
   }
    this.page_status = true;
    if(this.update_check === true){
      this.taskList.push(this.task_name);
      console.log("check fail update fail");
      
    }
    else{
      console.log("check success updar");
      this.update_check = true 
      this.taskList.splice(index,this.index_value , this.task_name);
    }

   this.due_tasks = this.taskList.length;
  } 
















allowDrop(ev)
{
ev.preventDefault();
console.log("all drop");

}
drag(ev , i )
{
ev.dataTransfer.setData("Text",ev.target.id);
console.log("drag is setting data");
console.log(i);

this.dragStatus = false;
return this.index_value = i

}
 drop(ev )
{
console.log(this.index_value);

  console.log("dra is roping");
  
ev.stopPropagation();
var data=ev.dataTransfer.getData("Text");
var el = document.getElementById(data);
// el.parentNode.removeChild(el);
this.taskList.pop(this.index_value);
this.dragStatus= true;
console.log("drag status true");
this.due_tasks = this.taskList.length;
}
}