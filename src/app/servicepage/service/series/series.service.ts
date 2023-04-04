import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  yy:number = 0;
  constructor( @Optional() private logService:LogService) { }
  getSeries(x:number){
    let sum:number = 0;
    for (let n = 0; n < 200; n++) {
      const denominator = Math.pow(2 * n + 1, 2);
      sum += Math.cos((2 * n + 1) * x) / denominator;
    }
    return (Math.PI / 2) - (4 / Math.PI) * sum;
  }
  getTab(xn:number = -3, xk:number = 3, h:number=0.1)
  {
    let x = xn;
    let y;
    while(x < xk)
    {
      this.yy = this.getSeries(x);
      y = this.yy;
      this.xy.set(x, y);
      this.logService.write("x="+x.toFixed(2)+"y="+this.yy.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
