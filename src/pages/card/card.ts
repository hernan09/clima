import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  dataTiempo:any
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, public navParams: NavParams) {
   this.dataTiempo = navParams.get('tiempo')
    console.log(this.dataTiempo)
  }
  back(){
    const loader = this.loadingCtrl.create({
      content: "Espere un momento ...",
      duration: 1000
    });
    loader.present();
  
    this.navCtrl.push(HomePage)
  }
  ionViewDidLoad() {
    
  }

}
