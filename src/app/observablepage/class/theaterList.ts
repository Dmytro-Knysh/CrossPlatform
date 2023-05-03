import { ConfigService } from "../service/config.service";
import { Theater } from "./theater";

export class TheaterList {
  theaterList = new Array();
  searchTheater = new Array();

  actorSub = this.configService.act$.subscribe(() => {
    let act = this.configService.act$.value;
    this.search(act.id);
  });

  constructor(private configService: ConfigService) {}

  add(theat: Theater): void {
    this.theaterList.push(theat);
    this.search(theat.Actor_id);
  }

  search(id_act: number): void {
    if (this.theaterList) {
      this.searchTheater = this.theaterList.filter((theater) => {
        return theater.actor_id == id_act;
      });

      if (this.searchTheater.length === 0) {
        this.searchTheater = [];
      }
    }
  }
}
