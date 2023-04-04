import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';
@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy:number = 0;
  private xy = new Map();
  constructor( @Optional() private logService:LogService) { }
  getRecursion(x: number, n: number): number {
    if (n === 0) {
      return 0;
    } else {
      const denominator = Math.pow(2 * n - 1, 2);
      const term = Math.cos((2 * n - 1) * x) / denominator;
      return term + this.getRecursion(x, n - 1);
    }
  }
  
  getTab(xn:number = -3, xk:number = 3, h:number=0.1){
    console.log("hi");
    let x = xn;
    let y;
    while(x < xk)
    {
      this.yy = (Math.PI / 2) - (4 / Math.PI) *this.getRecursion(x, 100);
      y = this.yy;
      this.xy.set(x, y);
      if(this.logService)
      this.logService.write("x="+x.toFixed(2)+"y="+this.yy.toFixed(4));
      x += h;
    }
    return this.xy;
  }
}
