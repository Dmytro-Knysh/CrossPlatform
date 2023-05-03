import { Actor } from "./actor";

export class actorList{
    act = new Array();
    constructor(){
    }
    add(actor:Actor){
        this.act.push(actor);
    }
}