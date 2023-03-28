import { Component, OnInit } from '@angular/core';
import { Exam } from './class/exam';
import { FinalExam } from './class/final-exam';
import { Test } from './class/test';
import { Trial } from './class/trial';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show:string="";
  constructor() { }

  ngOnInit() {
  }
  ras(){
    let exam = new Exam("Кросс платформна розробка");
    exam.checkExam();
    console.log(exam.getResult());
    let final = new FinalExam("Проєктування ІС");
    final.checkFinalExam();
    console.log(final.getResult());
    let test = new Test();
    test.checkTest();
    console.log(test.getResult());
    let trial = new Trial();
    trial.writeTrial();
    console.log(trial.getResult());
  }
}
