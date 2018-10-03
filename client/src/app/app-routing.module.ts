import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { InfoComponent } from './products/info/info.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ProductManagementComponent } from './admin/product-management/product-management.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { UserInfoComponent } from './admin/user-info/user-info.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { CreateProductComponent } from './admin/create-product/create-product.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'products', component: ProductsComponent, children:[
    {path: ':id', component: InfoComponent}
  ]},
  {path:'cart', component: CartComponent},
  {path:'user/:id', component: UserpageComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'admin', component: AdminComponent, children:[
    {path: 'products', component: ProductManagementComponent},
    {path: 'users', component: UserManagementComponent},
    {path: 'users/:id', component: UserInfoComponent},
    {path: 'products/create', redirectTo: EditProductComponent},
    {path: 'products/:id/edit', component: EditProductComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
