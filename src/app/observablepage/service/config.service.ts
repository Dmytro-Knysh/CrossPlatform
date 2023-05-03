import { Injectable } from '@angular/core';
import { Actor } from '../class/actor';
import { actorList} from '../class/actorList';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  currentActor = DEFAULT_ACTOR;

  act$: BehaviorSubject<Actor> = new BehaviorSubject<Actor>(DEFAULT_ACTOR);


  setActor(act:Actor){
    console.log("Зміни!!!!!!!");
    this.act$.next(act);
  }
  constructor() { }
}
const DEFAULT_ACTOR = {"id":1, "name":"Ім'я1"}