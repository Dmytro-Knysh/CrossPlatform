import { Component, OnInit } from '@angular/core';
import { TheaterList } from './class/theaterList';
import { actorList } from './class/actorList';
import { Actor } from './class/actor';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Theater } from './class/theater';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  actors = new actorList();

  private configService = new ConfigService();

  private subscription: Subscription[] = [];

  theaterList = new TheaterList(this.configService);
  
  act: Actor = new Actor();

  count = 0;
  constructor() { }

  ngOnInit() {
    const actSub = this.configService.act$ 
    .subscribe(() => {this.act = this.configService.act$.value;});
    this.subscription.push(actSub);
  }
  nextAct(){
    if(this.count < this.actors.act.size - 1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setActor(this.actors.act.get(this.count));
  }
  addTheater(name:any, place:any, work:any, actor:any){
    let theat = new Theater();
    theat.name = name;
    theat.place = place;
    theat.work = work;
    theat.actor_id = actor;
    //theat.actor_id = this.act.id;
    this.theaterList.add(theat);
  }
  addActor(NewActor:any){
    let a = new Actor();
    a.id = this.actors.act.size;
    a.name = NewActor;
    this.actors.add(a);
  }
  ngOnDestroy(){
    this.subscription.forEach(s => s.unsubscribe());
  }

}
