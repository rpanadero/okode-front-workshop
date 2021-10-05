import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'onboarding', loadChildren: () => import('./features/onboarding/onboarding.module').then(m => m.OnboardingModule)
  },
  {
    path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '', redirectTo: 'onboarding', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
