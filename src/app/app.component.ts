import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Linha do Tempo',
      url: '/linhadotempo',
      icon: 'Linha do Tempo'
    },
    {
      title: 'Tarefa',
      url: '/tarefa',
      icon: 'Tarefa'
    },
    {
      title: 'Lembretes',
      url: '/lembretes',
      icon: 'Lembretes'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'Configurações'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
