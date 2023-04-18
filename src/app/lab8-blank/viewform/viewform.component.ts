import { Component, OnInit } from '@angular/core';
import { Subject } from '../my-form/class/subject';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  show_update:boolean = false;
  teachers: Subject[] = [];
  constructor() { }

  ngOnInit() {}

  addTeacher(event: any) {
    if (event as Subject) {
      let teacher: Subject = event;
      this.teachers.push(teacher);
      console.log(this.teachers);
    } else {
      throw new Error("Error of type");
    }
  }
  update(){this.show_update = true;}
  showUp(event:any){
    if (typeof event === "boolean"){ this.show_update = event; }
    else{
      throw new Error("Error of type");
    }
  }
  update_save(event:any, i:number){
    if(event as Subject){
      this.teachers[i] = event;
    }
    else{
      throw new Error("Error of type");
    }
  }
}
