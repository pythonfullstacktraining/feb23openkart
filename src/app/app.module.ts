import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductStartComponent } from './product-start/product-start.component';
import { OrderListComponent } from './order-list/order-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductListService } from './product-list.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageDirective } from './product-detail/manage.directive';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './google-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductStartComponent,
    OrderListComponent,
    RegisterFormComponent,
    ProductEditComponent,
    ManageDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [ProductListService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
