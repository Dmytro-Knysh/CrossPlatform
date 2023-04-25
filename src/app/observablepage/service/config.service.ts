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
    this.act$.next(act);
  }
  constructor() { }
}

var actList = new actorList();
const DEFAULT_ACTOR = actList.act.get(0);