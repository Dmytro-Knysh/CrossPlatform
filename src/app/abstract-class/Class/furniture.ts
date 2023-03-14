export abstract class Furniture {
    name!: string;
    constructor(){ }
    show(){
        return "Назва = "+this.name;
    }
    getName(){
        return this.name;
    }
    abstract getPrice():any;
}
