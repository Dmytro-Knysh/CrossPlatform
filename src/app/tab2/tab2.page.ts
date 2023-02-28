import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  a:number = 0;
  b:number = 0;
  c:number = 1;
  ras(a: any, b: any){
    try{
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true))
      {
        throw new Error('Parametr is not a number!');
      }
      for(var i = this.a; i < this.b+1; i++)
      {
        if(i%6 == 0)
        {
          this.c= this.c*i;
        }
      } 
  }
  catch(error){
    console.log(error);
  }
}
}
