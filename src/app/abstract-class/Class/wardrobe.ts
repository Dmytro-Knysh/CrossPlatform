import { Furniture } from "./furniture";
export class Wardrobe extends Furniture {
    v!: any;
    constructor(override name: string, v:any){
        super()
        this.v = v;
    }
    getPrice() {
        return this.v*75;
    }
}
