import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { HomeComponent }  from './home/home.component';
import { UserComponent }  from './user/user.component';
import { FeeCategoryComponent }  from './finance/fee.category.component';
import { FeeParticularComponent }  from './finance/fee.particular.component';
import { FeeCollectionComponent }  from './finance/fee.collection.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user/user.service';
import { FeeService } from './finance/fee.service';
import { CommonService } from './common/common.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    FeeCategoryComponent,
    FeeParticularComponent,
    FeeCollectionComponent
  ],
  providers:[ UserService, FeeService, CommonService ],
  bootstrap: [ HomeComponent ]
})
export class AppModule { }
