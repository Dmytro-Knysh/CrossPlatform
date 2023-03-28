import { Exam } from "./exam";

export class FinalExam extends Exam{
    finalRating:number | undefined;
    constructor(name:string){
        super(name);
        this.finalRating = 0;
    }
    checkFinalExam(){
        this.finalRating = 100;
    }
    writeFinalExam(){
        return "Thank You!";
    }
    override getResult(): string {
        return "Excellent your result is " + this.finalRating;
    }

}
