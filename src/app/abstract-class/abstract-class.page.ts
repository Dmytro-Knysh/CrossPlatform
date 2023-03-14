import { Component, OnInit } from '@angular/core';
import { Furniture } from './Class/furniture';
import { Wardrobe } from './Class/wardrobe';
import { Sofa } from './Class/sofa';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  furniture: Furniture [] = [];
  avgDivan: number = 0;
  avgShafa: number = 0;
  num: number = 0;
  constructor() { }
  getRand(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  ras(nn:any){
    this.furniture = new Array();
    let n = parseInt(nn);
    for(let i = 0; i < n; i++){
      this.furniture.push(new Wardrobe("Шафа",this.getRand(10)));
      this.furniture.push(new Sofa("Диван",this.getRand(10)));
    }
    this.getAVG(n);
  }
  getAVG(n:any){
    let divan =0, shafa = 0;
    let shafa_price = 0, divan_price = 0;
    for(let i = 0; i < n; i++){
      if(this.furniture[i].getName() == "Шафа")
      {
        shafa++;
        shafa_price += this.furniture[i].getPrice();
      }
      else{
        divan++;
        divan_price += this.furniture[i].getPrice();
      }
    }
    this.avgDivan = divan_price/divan;
    this.avgShafa = shafa_price/shafa;
  }
  getAvgDivan(){
    return "Середня ціна диванів = " + this.avgDivan;
  }
  getAvgShafa(){
    return "Середня ціна шаф = " + this.avgShafa;
  }
  ngOnInit() {
  }

}
