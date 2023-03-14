import { Furniture } from "./furniture";
export class Sofa extends Furniture {
    s!: any;
    constructor(override name:string, s:any){
        super();
        this.s = s;
    }
    getPrice() {
        return Math.ceil(Math.pow(this.s, 2)/3 + 5000);
    }            
}
