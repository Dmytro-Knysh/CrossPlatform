export class Subject{
    name:string = "";
    department:string = "";
    numOfLect:number = 10;
    numOfLabs:number = 10;
    control:string = "";
    PIBofLector:string = "";
    PIBofLab:string = "";
    PIBofTeachers:string[] = [];
    constructor(name1:string, depart:string, num1:number, num2:number, control1:string,pib1:string, pib2:string, pib3:string[]){
        this.name = name1;
        this.department = depart;
        this.numOfLect = num1;
        this.numOfLabs = num2;
        this.control = control1;
        this.PIBofLector = pib1;
        this.PIBofLab = pib2;
        this.PIBofTeachers = pib3;
    }
}