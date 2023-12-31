import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { ServerComponent } from '../servers/server/server.component';
import { ServersComponent } from '../servers/servers.component';
import { UserComponent } from '../users/user/user.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuard } from '../auth-guard/auth-guard.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
  ]},
  {path:'servers',canActivateChild:[AuthGuard],component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'not-found',component:PageNotFoundComponent}, //pathMatch: 'full
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
