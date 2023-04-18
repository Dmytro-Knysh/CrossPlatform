import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../my-form/class/subject';
import { NameValidatorService } from '../my-form/service/name-validator.service';
import { nameValidator } from '../my-form/service/nameValidator';
import { error } from 'console';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  @Input() teacher!:Subject;
  @Input() show:boolean = true;
  @Output() teacherChange: EventEmitter<Subject> = new EventEmitter<Subject>();
  @Output() showChange = new EventEmitter();
  constructor() { }
  validate_name(d:string):boolean{
    let validator = new NameValidatorService();
    if(d){
      if(!validator.validate_name(d)) return false;else     return true;
    }
    else    return true;
  }
  save(a:any, db:any, dd:any, b:any){
    this.show = false;
    if(this.validate_name(a) && this.validate_name(db)){
    }
    else{
      throw Error("Error of name");
    }
    this.teacher = new Subject(a,db,dd, b, this.teacher.control, this.teacher.PIBofLector, this.teacher.PIBofLab, this.teacher.PIBofTeachers);
    this.teacherChange.emit(this.teacher);
    this.showChange.emit(this.show);
  }
  ngOnInit() {}

}
