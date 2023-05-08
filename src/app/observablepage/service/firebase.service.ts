import { Injectable } from '@angular/core';
import { Theater } from '../class/theater';
import { Actor } from '../class/actor';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  theaterListRef?: AngularFireList<any>;
  actorListRef?:AngularFireList<any>;
  bdRef?:AngularFireObject<any>;
  constructor(private db:AngularFireDatabase) { }

  createTheater(theater:Theater){
    const id = theater.id.toString(); 
    return this.theaterListRef?.set(id, theater);
  }

  createActor(actor: Actor) {
    const id = actor.id.toString(); 
    return this.actorListRef?.set(id, actor);
  }
  

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }
  
  getRecordList(bd:string, op:boolean){
    if(op){
      this.theaterListRef = this.db.list('/'+bd);
      return this.theaterListRef;
    }
    else{
      this.actorListRef = this.db.list('/'+bd);
      return this.actorListRef;
    }
  }

  updateTheater(id:number, theater:Theater, bd:string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.update({
      Actor_id: theater.Actor_id,
      Name:theater.Name,
      Place:theater.Place,
      Price:theater.Price,
      Work:theater.Work,
      id:theater.id
    })
  }

  updateActor(id:number, actor:Actor, bd:string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.update({
      id: actor.id,
      name: actor.name
    })
  }
  
  deleteRecord(id:string, bd:string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.remove();
  }

  deleteActor(id:number, bd:string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.remove();
  }
  deleteTheater(id:number, bd:string){
    this.bdRef = this.db.object('/'+bd+'/'+id);
    return this.bdRef.remove();
  }
  
}
