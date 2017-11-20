import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { UserComponent }   from './user/user.component';
import { HomeComponent }   from './home/home.component';
import { UserComponent }   from './user/user.component';
import { FeeCategoryComponent }   from './finance/fee.category.component';
import { FeeParticularComponent }   from './finance/fee.particular.component';
import { FeeCollectionComponent }   from './finance/fee.collection.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'signup', component: UserComponent },
  { path: 'feeCategory', component: FeeCategoryComponent },
  { path: 'feeParticular/:id', component: FeeParticularComponent },
  { path: 'feeCollection', component: FeeCollectionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}