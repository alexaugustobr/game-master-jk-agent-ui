import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

import { ForbiddenComponent } from './core/forbidden.component';
import { PageNotFoundComponent } from './core/page-not-found';

import { AuthGuard } from "./security/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent, 
    children: [
      { path: 'overview',
        canActivate: [AuthGuard], 
        loadChildren: () => import('app/routes/overview/overview.module').then(m => m.OverviewModule) 
      },
      { path: 'users', canActivate: [AuthGuard], 
        loadChildren: () => import('app/routes/user/user.module').then(m => m.UserModule) 
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: '**', redirectTo: 'page-not-found' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





  // { path: 'pessoas', loadChildren: () => import('app/pessoas/pessoas.module').then(m => m.PessoasModule) },
  // { path: 'servers', 
  //   component: DashboardPageComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  // },
  // { path: 'relatorios', loadChildren: () => import('app/relatorios/relatorios.module').then(m => m.RelatoriosModule) },
