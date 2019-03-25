import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'linhadotempo', loadChildren: './linhadotempo/linhadotempo.module#LinhadotempoPageModule' },
  { path: 'tarefa', loadChildren: './tarefa/tarefa.module#TarefaPageModule' },
  { path: 'lembretes', loadChildren: './lembretes/lembretes.module#LembretesPageModule' },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
