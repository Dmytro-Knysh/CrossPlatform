import { IResult } from "../interface/iresult";
import { ITest } from "../interface/itest";

export class Test implements ITest,IResult{
    testTasks: string;
    result:number;
    constructor()
    {
        this.testTasks="2+2 = ";
        this.result=0;
    }
    checkTest(): void {
        this.result = 100;
    }
    getResult(): string {
        return "Excellent your result is " + this.result;
    }
    writeTest(){
        return "Thank You!";
    }
}
