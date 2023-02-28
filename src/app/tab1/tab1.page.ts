import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  constructor() {}
  a:number = 0;
  b:number = 0;
  c:number = 0;
  d:number = 0;
  ras(a: any, b: any, c: any){
    try{
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true))
      {
        throw new Error('Parametr is not a number!');
      }
      if((this.a > 10 && this.a < 15)){
        if(this.b > 10 && this.b < 15){
          this.d = this.a * this.b;
          if(this.c > 10 && this.c < 15)
          {
            this.d=this.d*this.c;
          }
        }
        else if(this.c > 10 && this.c < 15)
        {
          this.d=this.a*this.c;
        }
        else{
          this.d = this.a;
        }
      }
      else if(this.b > 10 && this.b < 15)
      {
        if(this.c > 10 && this.c < 15)
        {
          this.d = this.b * this.c;
        }
        else{
          this.d = this.b;
        }
      }
      else if (this.c > 10 && this.c < 15){
        this.d = c;
      }
      else {
        this.d = 0;
      }
  }
  catch(error){
    console.log(error);
  }
}
}
