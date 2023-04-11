import { Component, OnInit } from '@angular/core';
import { Subject } from '../my-form/class/subject';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
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
  myForm !: FormGroup;
  teacher !: Subject;
  constructor( private fb: FormBuilder, private alertController: AlertController) {
    this.myForm = this.fb.group({
        SubName:['',[nameValidator]],
        CafName:['',[nameValidator]],
        PibLec:['',[nameValidator]],
        PibLab:['',[nameValidator]],
        TypeControl:['',[controlValidator]],
        numOfLect:['',[Validators.required]],
        numOfLabs:['',[Validators.required]],
        PIBofTeachers:new FormArray([new FormControl]),
    });
   }

   addPIBofTeachers(){
    console.log("Add");
    (this.myForm.controls['PIBofTeachers'] as FormArray).push(new FormControl())
   }
   deletePIBofTeachers(i:any){
    console.log("Add");
    (this.myForm.controls['PIBofTeachers'] as FormArray).push(new FormControl())
   }
   getControls(){
    return (this.myForm.get('PIBofTeachers') as FormArray).controls;
   }
   onSubmit(){
    let d1 = this.myForm.value.SubName;
    let d2 = this.myForm.value.CafName;
    let d3 = this.myForm.value.PibLec;
    let d4 = this.myForm.value.PibLab;
    let c1 = this.myForm.value.TypeControl;
    let valid1 = new ControlValidatorService();
    let valid = new NameValidatorService();
    if(valid1.validate_control(c1))
    {
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
