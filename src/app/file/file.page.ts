import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data:any = [];
  data_users: any = [];
  data_birth: any = [];
  dataUrl = 'https://api.jsonbin.io/v3/b/6401fe09ace6f33a22e8b995';
  loading: any;
  constructor(public loadingController: LoadingController) {
   }
   async load(){
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message:'Loading...'
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
    .then(json => {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      while(this.data[i] != undefined){
        this.data_users.push(this.data[i][0]);
        i++;
      }
      this.loading.dismiss();
    })
  }
  ngOnInit() {
  }
  getBirthDay(){

    let a= 0;
      for (let i = 0; this.data_users[i] != undefined; i++)
      {
        for (let j = 0; this.data_users[j] != undefined; j++){
          if((this.data_users[i]["Birthday"] == this.data_users[j]["Birthday"]) && (i != j))
          {
            this.data_birth[a]=this.data_users[i]["Birthday"];
            a++;
          }
        }
      }
  }
  getColor(a:string, index:any){
    this.getBirthDay();
    let i = 0;
   while(this.data_birth[i] != undefined){
      if(this.data_birth[i] == a && i != index)
      {
        return 'red';
      }
      else{
      }
      i++;
    }
    this.data_birth = [];
    return '';
  }
}
