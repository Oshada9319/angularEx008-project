import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [
    TestService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
