import { IExam } from "../interface/iexam";
import { IResult } from "../interface/iresult";

export class Exam implements IExam,IResult {
    task: string;
    private result: number;
    subject:string;
    constructor(name:string){
        this.subject = name;
        this.result = 0;
        this.task = "Write about yourself";
    }
    getResult(): string {
        return "Excellent your result is " + this.result;
    }
    checkExam(){
        this.result = 100;
    }
    writeExam(){
        return "Thank You!";
    }

}
