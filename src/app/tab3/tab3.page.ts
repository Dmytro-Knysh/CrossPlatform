import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  constructor() {}
  arrayras(n: any){
    this.a=[];
    try{
      this.n = parseInt(n);
      if(isNaN(this.n) == true)
      {
        throw new Error('Parametr is not a number!');
      }
      if(n <= 0){
        throw new Error('Parametr is less than zero!');
      }
      this.a = Array(this.n);
      console.log("Array created");
      for(var i = 0; i < this.n; i++){
        this.a[i] = Array(this.n);
        for(var j = 0; j < this.n; j++){
          let aa = Math.floor(Math.random() * (1 - 100 + 1) + 100)
          this.a[i][j] = parseFloat(aa.toFixed(0));
        }
      }
    }
    catch(error){
      console.log(error);
    }
  }
  getColor(b:number){
    return b>0 && b%2==0?'green':'red';
  }
  ngOnInit(){
  }
}
