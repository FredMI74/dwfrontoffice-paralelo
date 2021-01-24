import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'wishes', loadChildren: () => import('./features/wishes/wishes.module').then(m => m.WishesModule)},

  { path: 'login', component: LoginComponent },

  //qualquer outro caminho redireciona para home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
