import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { InfoComponent } from './products/info/info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginComponent } from './login/login.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { UserInfoComponent } from './admin/user-info/user-info.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProductsComponent,
    AdminComponent,
    InfoComponent,
    CheckoutComponent,
    CartComponent,
    UserpageComponent,
    LoginComponent,
    ProductManagementComponent,
    UserManagementComponent,
    UserInfoComponent,
    EditProductComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
