import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO = {
    email: "",
    senha: "",
  }

  constructor(public navCtrl: NavController, public menu: MenuController, private auth: AuthService) {

  }

  ionViewWillEnter() { // desabilita o menu que arrasta quando entra  
    this.menu.swipeEnable(false);   
  } 
 
  ionViewDidLeave() { // volta o menu depois que sai da pagina
    this.menu.swipeEnable(true);    
  } 

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});  
  }
 

  login() {
      this.auth.authenticate(this.creds).subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.push('CategoriasPage');
      },
      error => {}
    ) 
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
 

}