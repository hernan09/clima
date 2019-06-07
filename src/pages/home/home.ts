import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
 tiempos:any
  constructor(public navCtrl: NavController,public http:HttpClient) {
    
  }

  getuser(){
    this.http.get('https://ws.smn.gob.ar/map_items/weather').subscribe(res=>{

      this.tiempos=res
      console.log(this.tiempos)
    })
  }

  gotoClima(tiempo){
    this.navCtrl.push(CardPage,{'tiempo':tiempo})
  }

  ngOnInit(){
    this.getuser();
  }
}
