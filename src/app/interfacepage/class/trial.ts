import { IExam } from "../interface/iexam";
import { IResult } from "../interface/iresult";

export class Trial implements IResult{
    task:string;
    result:number;
    getResult(): string {
          return "Excellent your result is " + this.result;
    }
    constructor(){
        this.task = "2*2 = ";
        this.result = 0;
    }
    writeTrial(){
        this.result = 100;
        return "Thank You!";
    }
}
