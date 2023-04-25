import { Actor } from "./actor";

export class actorList{
    act = new Map();
    constructor(){
        this.act.set(0,{id:0, name:"Actor1"});
        this.act.set(1,{id:1, name:"Actor2"});
    }
    add(actor:Actor){
        this.act.set(actor.id,{id:actor.id, name:actor.name});
    }
}