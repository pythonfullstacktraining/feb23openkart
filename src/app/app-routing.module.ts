import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './google-auth-guard.service';

const routes: Routes = [
  {path: '', component:LoginComponent, pathMatch:'full'},
  {path:'products', component: ProductListComponent,
                        children: [
                        {path:'', component: ProductStartComponent},
                        {path:'new', component: ProductEditComponent},
                        {path:':id', component:ProductDetailComponent},
                        {path:':id/edit', component: ProductEditComponent}


                        ], canActivate:[AuthGuard]
                  },
  {path: 'orders', component: OrderListComponent},
  {path:'register', component: RegisterFormComponent},
  {path:'contact', component: RegisterFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
