import { ConfigService } from "../service/config.service";
import { Theater } from "./theater";

export class TheaterList {
  private theaterList: Theater[] = [];
  private searchTheater: Theater[] = [];

  searchTheaterResult: string[] = [];

  actorSub = this.configService.act$.subscribe(() => {
    const act = this.configService.act$.value;
    this.search(act.id);
  });

  constructor(private configService: ConfigService) {
    const theater = new Theater();
    theater.name = "Оперний театр";
    theater.actor_id = 1;
    theater.place = "Київ";
    theater.work = "Понеділок - субота";
    theater.price = 120;
    this.add(theater);
  }

  add(theat: Theater): void {
    this.theaterList.push(theat);
    this.search(theat.actor_id);
  }

  search(id_act: number): void {
    this.searchTheater = this.theaterList.filter((theater) => {
      return theater.actor_id == id_act;
    });
    this.searchTheaterResult = [];
    this.searchTheater.forEach((el) => {
      this.searchTheaterResult.push('Назва: ' + el.name);
      this.searchTheaterResult.push('Id: ' + el.actor_id);
      this.searchTheaterResult.push('Дні роботи: ' + el.work);
      this.searchTheaterResult.push('Ціна: ' + el.price);
    });
  }
}
