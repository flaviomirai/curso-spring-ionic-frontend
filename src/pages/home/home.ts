import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() { // desabilita o menu que arrasta quando entra  
    this.menu.swipeEnable(false);   
  } 
 
  ionViewDidLeave() { // volta o menu depois que sai da pagina
    this.menu.swipeEnable(true);    
  } 
 

  login() {
    this.navCtrl.push('CategoriasPage');
    console.log("Categorias");
  }
 

}