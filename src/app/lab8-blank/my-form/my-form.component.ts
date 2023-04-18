import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from '../my-form/class/subject';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from './service/nameValidator';
import { NameValidatorService } from './service/name-validator.service';
import { ControlValidatorService } from './service/control-validator.service';
import { AlertController } from '@ionic/angular';
import { controlValidator } from './service/controlValidator';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  @Output() teacherAdd: EventEmitter<Subject> = new EventEmitter<Subject>();
  teacherForm !: FormGroup;
  subject!: Subject;
  constructor( private fb: FormBuilder, private alertController: AlertController) {
    this.teacherForm = this.fb.group({
        SubName:['',[nameValidator]],
        CafName:['',[nameValidator]],
        lecture:[0],
        lab:[0],
        TypeControl:['',[controlValidator]],
        PibLec:['',[nameValidator]],
        PibLab:['',[nameValidator]],
        PIBs:new FormArray([new FormControl()]),
    });
   }

   addPIBofTeachers() {
    console.log("Add");
    (this.teacherForm.controls['PIBs'] as FormArray).push(
      new FormControl()
    )
   }
   deletePIBofTeachers(i:any){
    console.log('Delete');
    (this.teacherForm.controls['PIBs'] as FormArray).removeAt(i)
    }
   getControls(){
    return (this.teacherForm.get('PIBs') as FormArray).controls;
   }
   onSubmit(){
    let d1 = this.teacherForm.value.SubName;
    let d2 = this.teacherForm.value.CafName;
    let lec = this.teacherForm.value.lecture;
    let lab = this.teacherForm.value.lab;
    let d3 = this.teacherForm.value.PibLec;
    let d4 = this.teacherForm.value.PibLab;
    let c1 = this.teacherForm.value.TypeControl;
    let arr = this.teacherForm.value.PIBs;
    let valid1 = new ControlValidatorService();
    let valid = new NameValidatorService();
    console.log(this.teacherForm.get('PIBs') as FormArray);
    if(valid1.validate_control(c1))
    {
      this.subject = new Subject(d1,d2,lec,lab, c1,d3,d4, arr);
      this.teacherAdd.emit(this.subject);
      console.log("SubmitControl");
    }
    else{
      this.presentAlert("Невірно вказаний тип контролю")
    }
    if(valid.validate_name(d1)){
      console.log("Submit1");
    }
    else{
      this.presentAlert("Назва дисципліни невірна")
    }
    if(valid.validate_name(d2))
    {
      console.log("Submit2");
    }
    else{
      this.presentAlert("Назва кафедри невірна")
    }
    if(valid.validate_name(d3))
    {
      console.log("Submit3");
    }
    else{
      this.presentAlert("Ім'я викладача що веде лекції невірне")
    }
    if(valid.validate_name(d4))
    {
      console.log("Submit4");
    }
    else{
      this.presentAlert("Ім'я викладача що веде лабораторні невірне")
    }
  };
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: "Помилка",
      subHeader: "",
      message: message,
      buttons: ["OK"],
    });
    await alert.present();
  }  
  ngOnInit() {}
}
