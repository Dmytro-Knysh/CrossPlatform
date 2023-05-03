import { Component, OnInit } from '@angular/core';
import { TheaterList } from './class/theaterList';
import { actorList } from './class/actorList';
import { Actor } from './class/actor';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Theater } from './class/theater';
import { ConfigService } from './service/config.service';
import { FirebaseService } from './service/firebase.service';

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

  bdTheater = 'Theater';
  bdActor = 'Actor'

  constructor(public fbService:FirebaseService) { 
  }
  fetchTask(bd:any, op:any){
    this.fbService.getRecordList(bd,op).valueChanges().subscribe(res => {
      console.log(res)
      if(op) this.theaterList.theaterList = res;
      else{
        this.actors.act = res;
        this.act = this.actors.act[this.count];
        this.theaterList.search(this.act.id);
      }
    })
  }
  
  ngOnInit() {
    this.fetchTask(this.bdTheater, true);
    let taskRes = this.fbService.getRecordList(this.bdTheater, true);
    taskRes.snapshotChanges().subscribe(
    )

    this.fetchTask(this.bdActor,false);
    let taskRes1 = this.fbService.getRecordList(this.bdActor, false);
    taskRes1.snapshotChanges().subscribe(
    )

    const actSub = this.configService.act$
    .subscribe(() => { this.act = this.configService.act$.value; });
    this.subscription.push(actSub);
  }
  nextAct(){
    if(this.count < this.actors.act.length - 1){
      this.count++;
    }
    else this.count = 0;
    this.configService.setActor(this.actors.act[this.count]);
  }
  addTheater(name:any, place:any, work:any, actor1:any, price:any){
    console.log(actor1);
    let theat = new Theater();
    theat.Name = name;
    theat.Place = place;
    theat.Work = work;
    theat.Actor_id = actor1;
    theat.Price = price;

    this.fbService.createTheater(theat);
    this.theaterList.search(this.act.id);
    this.theaterList.add(theat);
  }
  addActor(NewActor:any){
    let a = new Actor();
    a.id = this.actors.act.length;
    a.name = NewActor;
    this.fbService.createActor(a);
  }
  ngOnDestroy(){
    this.subscription.forEach(s => s.unsubscribe());
  }

}
