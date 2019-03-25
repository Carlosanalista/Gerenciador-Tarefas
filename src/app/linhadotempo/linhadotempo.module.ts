import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LinhadotempoPage } from './linhadotempo.page';

const routes: Routes = [
  {
    path: '',
    component: LinhadotempoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LinhadotempoPage]
})
export class LinhadotempoPageModule {}
